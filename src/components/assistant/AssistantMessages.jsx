import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../../i18n/useLanguage.js';

function AssistantMessage({ role, text }) {
  const { t } = useLanguage();
  return (
    <div className={`assistant-message is-${role}`}>
      <span className="assistant-message-author">
        {role === 'assistant' && <Sparkles size={13} aria-hidden="true" />}
        {role === 'assistant' ? 'Vlad AI' : t('You')}
      </span>
      <p>{text}</p>
    </div>
  );
}

function AssistantMessages({ messages, isSending, isOpen, onSend, error }) {
  const { t } = useLanguage();
  const suggestions = [
    t('Explore projects'),
    t('What can Vlad automate?'),
    t('What technologies does Vlad use?'),
    t('I have a project'),
  ];
  const scrollRef = useRef(null);
  const followLatest = useRef(true);
  const previousCount = useRef(0);
  const [showLatest, setShowLatest] = useState(false);

  const scrollToLatest = () => {
    const element = scrollRef.current;
    element.scrollTop = element.scrollHeight;
    followLatest.current = true;
    setShowLatest(false);
  };

  useLayoutEffect(() => {
    if (!isOpen) return;
    const newUserMessage = messages.length !== previousCount.current && messages.at(-1)?.role === 'user';
    if (followLatest.current || newUserMessage) scrollToLatest();
    else setShowLatest(true);
    previousCount.current = messages.length;
  }, [messages, isSending, isOpen, error]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const observer = new ResizeObserver(() => {
      if (followLatest.current) scrollToLatest();
    });
    observer.observe(scrollRef.current);
    return () => observer.disconnect();
  }, [isOpen]);

  return (
    <div className="assistant-conversation">
      <div
        className="assistant-scroll"
        ref={scrollRef}
        tabIndex={0}
        role="region"
        aria-label={t('Conversation history')}
        onScroll={(event) => {
          const { scrollHeight, scrollTop, clientHeight } = event.currentTarget;
          followLatest.current = scrollHeight - scrollTop - clientHeight < 48;
          setShowLatest(!followLatest.current);
        }}
      >
        {messages.length === 0 && (
          <div className="assistant-initial-state">
            <div className="assistant-welcome">
              <h3>{t('Hi! I’m Vlad’s AI assistant.')}</h3>
              <p>{t('Ask me about his projects, technical skills or AI automation work.')}</p>
            </div>
            <div className="assistant-suggestions" aria-label={t('Suggested questions')}>
              {suggestions.map((suggestion) => (
                <button type="button" key={suggestion} disabled={isSending} onClick={() => onSend(suggestion)}>
                  {suggestion}<ArrowUpRight size={14} aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="assistant-message-list" role="log" aria-label={t('Messages')} aria-live="polite" aria-relevant="additions" tabIndex={-1}>
          {messages.map((message) => <AssistantMessage key={message.id} {...message} />)}
        </div>
        <div className="assistant-status" role="status">
          {isSending && <span className="assistant-typing"><span aria-hidden="true"><i /><i /><i /></span>{t('Preparing demo response')}</span>}
        </div>
        {error && <p className="assistant-error" role="alert">{error}</p>}
      </div>
      {showLatest && <button className="assistant-latest" type="button" onClick={scrollToLatest}><ArrowDown size={14} aria-hidden="true" />{t('Latest messages')}</button>}
    </div>
  );
}

export default AssistantMessages;
