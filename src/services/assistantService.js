export const ASSISTANT_MESSAGE_LIMIT = 2000;
export const ASSISTANT_HISTORY_LIMIT = 8;
const ASSISTANT_DEMO_RESPONSE_DELAY = 650;
const ASSISTANT_REQUEST_TIMEOUT = 15000;

// Public builds default to demo mode. A future live integration must provide an
// HTTPS endpoint explicitly; localhost and non-HTTPS endpoints are never used.
const environment = import.meta.env ?? {};
const configuredWebhookUrl = environment.VITE_ASSISTANT_WEBHOOK_URL;
const isSafeLiveWebhook = (() => {
  try {
    return new URL(configuredWebhookUrl).protocol === 'https:';
  } catch {
    return false;
  }
})();

export const ASSISTANT_MODE = environment.VITE_ASSISTANT_MODE === 'live' && isSafeLiveWebhook
  ? 'live'
  : 'demo';

/**
 * @typedef {Object} AssistantRequest
 * @property {string} message Trimmed visitor message.
 * @property {string} sessionId Anonymous, in-memory browser session ID.
 * @property {string} currentPage Router pathname at the time of sending.
 * @property {{role: 'user' | 'assistant', content: string}[]} [history]
 * Recent, current-browser conversation only. The current message is excluded.
 */

/**
 * UI transport boundary. Demo mode is the safe default for public builds. The
 * live n8n request contract remains available behind an explicit HTTPS config.
 * @param {AssistantRequest} request
 * @param {{signal?: AbortSignal}} [options]
 * @returns {Promise<{message?: string, mode?: 'demo', status?: 'unavailable' | 'error'}>}
 */
export async function sendAssistantMessage(request, { signal } = {}) {
  if (!request.message.trim() || request.message.length > ASSISTANT_MESSAGE_LIMIT) {
    throw new Error('Please enter a message within the character limit.');
  }

  if (ASSISTANT_MODE === 'demo') {
    await waitForDemoResponse(signal);
    return { mode: 'demo' };
  }

  return sendLiveAssistantMessage(request, { signal });
}

/**
 * Converts UI conversation records into the n8n history contract. Demo,
 * unavailable and validation messages stay local to the frontend and never
 * become model context.
 */
export function buildAssistantHistory(messages) {
  return messages
    .filter((message) => (
      (message.role === 'user' || message.role === 'assistant')
      && message.kind !== 'demo'
      && message.kind !== 'error'
      && message.kind !== 'loading'
      && message.kind !== 'system'
      && typeof message.text === 'string'
      && Boolean(message.text.trim())
    ))
    .slice(-ASSISTANT_HISTORY_LIMIT)
    .map((message) => ({ role: message.role, content: message.text.trim() }));
}

function waitForDemoResponse(signal) {
  return new Promise((resolve, reject) => {
    const finish = () => {
      signal?.removeEventListener('abort', abort);
      resolve();
    };
    const timeout = setTimeout(finish, ASSISTANT_DEMO_RESPONSE_DELAY);
    const abort = () => {
      clearTimeout(timeout);
      signal?.removeEventListener('abort', abort);
      reject(new DOMException('The operation was aborted.', 'AbortError'));
    };

    if (signal?.aborted) {
      abort();
      return;
    }

    signal?.addEventListener('abort', abort, { once: true });
  });
}

async function sendLiveAssistantMessage(request, { signal } = {}) {
  const controller = new AbortController();
  const abortRequest = () => controller.abort();
  const timeout = setTimeout(abortRequest, ASSISTANT_REQUEST_TIMEOUT);

  if (signal?.aborted) {
    clearTimeout(timeout);
    throw new DOMException('The operation was aborted.', 'AbortError');
  }

  signal?.addEventListener('abort', abortRequest, { once: true });

  try {
    const response = await fetch(configuredWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: request.message,
        sessionId: request.sessionId,
        currentPage: request.currentPage,
        history: request.history ?? [],
      }),
      signal: controller.signal,
    });

    const payload = await response.json();

    if (!response.ok && response.status >= 500) {
      throw new Error(`Assistant webhook responded with ${response.status}.`);
    }

    if (payload?.success === true && typeof payload.reply === 'string' && payload.reply.trim()) {
      return { message: payload.reply.trim() };
    }

    if (payload?.success === false) {
      return {
        message: typeof payload.reply === 'string' && payload.reply.trim() ? payload.reply.trim() : undefined,
        status: 'error',
      };
    }

    if (!response.ok) {
      throw new Error(`Assistant webhook responded with ${response.status}.`);
    }

    throw new Error('Assistant webhook returned an invalid response payload.');
  } catch (error) {
    if (signal?.aborted) throw error;

    if (environment.DEV) {
      console.error('Vlad AI Assistant webhook request failed:', error);
    }

    return { status: 'unavailable' };
  } finally {
    clearTimeout(timeout);
    signal?.removeEventListener('abort', abortRequest);
  }
}

// Memory only: no cookies, storage, personal data, or cross-visit identifier.
let sessionId;
export function getAssistantSessionId() {
  if (!sessionId) {
    sessionId = globalThis.crypto.randomUUID?.() ?? Array.from(
      globalThis.crypto.getRandomValues(new Uint8Array(16)),
      (byte) => byte.toString(16).padStart(2, '0'),
    ).join('');
  }
  return sessionId;
}
