export const ASSISTANT_MESSAGE_LIMIT = 2000;
const ASSISTANT_UNAVAILABLE_MESSAGE = 'The assistant is temporarily unavailable. Please try again.';
const ASSISTANT_DEMO_RESPONSE_DELAY = 650;

// Public builds default to demo mode. A future live integration must provide an
// HTTPS endpoint explicitly; localhost and non-HTTPS endpoints are never used.
const configuredWebhookUrl = import.meta.env.VITE_ASSISTANT_WEBHOOK_URL;
const isSafeLiveWebhook = (() => {
  try {
    return new URL(configuredWebhookUrl).protocol === 'https:';
  } catch {
    return false;
  }
})();

export const ASSISTANT_MODE = import.meta.env.VITE_ASSISTANT_MODE === 'live' && isSafeLiveWebhook
  ? 'live'
  : 'demo';

/**
 * @typedef {Object} AssistantRequest
 * @property {string} message Trimmed visitor message.
 * @property {string} sessionId Anonymous, in-memory browser session ID.
 * @property {string} currentPage Router pathname at the time of sending.
 */

/**
 * UI transport boundary. Demo mode is the safe default for public builds. The
 * live n8n request contract remains available behind an explicit HTTPS config.
 * @param {AssistantRequest} request
 * @param {{signal?: AbortSignal}} [options]
 * @returns {Promise<{message?: string, mode?: 'demo'}>}
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
  try {
    const response = await fetch(configuredWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: request.message,
        sessionId: request.sessionId,
        currentPage: request.currentPage,
      }),
      signal,
    });

    if (!response.ok) {
      throw new Error(`Assistant webhook responded with ${response.status}.`);
    }

    const payload = await response.json();
    if (!payload?.success || typeof payload.reply !== 'string' || !payload.reply.trim()) {
      throw new Error('Assistant webhook returned an invalid response payload.');
    }

    return { message: payload.reply.trim() };
  } catch (error) {
    if (error.name === 'AbortError') throw error;

    if (import.meta.env.DEV) {
      console.error('Vlad AI Assistant webhook request failed:', error);
    }

    return { message: ASSISTANT_UNAVAILABLE_MESSAGE };
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
