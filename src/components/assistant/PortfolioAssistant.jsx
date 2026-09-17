import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ASSISTANT_MESSAGE_LIMIT, getAssistantSessionId, sendAssistantMessage } from '../../services/assistantService.js';
import AssistantLauncher from './AssistantLauncher.jsx';
import AssistantPanel from './AssistantPanel.jsx';
import { useLanguage } from '../../i18n/useLanguage.js';
import '../../styles/assistant.css';

function PortfolioAssistant() {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  const pendingRequest = useRef(null);
  const messageSequence = useRef(0);

  useEffect(() => () => pendingRequest.current?.abort(), []);

  const sendMessage = async (value) => {
    const message = value.trim();
    if (!message || message.length > ASSISTANT_MESSAGE_LIMIT || pendingRequest.current) return;

    const controller = new AbortController();
    pendingRequest.current = controller;
    setError('');
    setIsSending(true);
    const userMessage = { id: ++messageSequence.current, role: 'user', text: message };
    setMessages((current) => [...current, userMessage]);

    try {
      const response = await sendAssistantMessage(
        { message, sessionId: getAssistantSessionId(), currentPage: pathname },
        { signal: controller.signal },
      );
      if (!controller.signal.aborted) {
        const responseText = response.mode === 'demo'
          ? t('The AI assistant is currently in demo mode. Live functionality is coming soon.')
          : response.message === 'The assistant is temporarily unavailable. Please try again.'
          ? t('The assistant is temporarily unavailable. Please try again.')
          : response.message;
        const reply = { id: ++messageSequence.current, role: 'assistant', text: responseText };
        setMessages((current) => [...current, reply]);
      }
    } catch (requestError) {
      if (requestError.name !== 'AbortError') {
        setError(t('The response could not be loaded. Please try sending your message again.'));
      }
    } finally {
      if (!controller.signal.aborted) setIsSending(false);
      if (pendingRequest.current === controller) pendingRequest.current = null;
    }
  };

  return (
    <>
      <div className="assistant-dock-space" aria-hidden="true" />
      <AssistantLauncher isOpen={isOpen} onOpen={() => { setHasOpened(true); setIsOpen(true); }} />
      {hasOpened && (
        <AssistantPanel
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          messages={messages}
          isSending={isSending}
          error={error}
          onSend={sendMessage}
        />
      )}
    </>
  );
}

export default PortfolioAssistant;
