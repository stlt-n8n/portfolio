import { useEffect, useRef, useState } from 'react';
import { Sparkles, X } from 'lucide-react';
import AssistantMessages from './AssistantMessages.jsx';
import AssistantComposer from './AssistantComposer.jsx';
import { useLanguage } from '../../i18n/useLanguage.js';

function AssistantPanel({ isOpen, onClose, messages, isSending, error, onSend }) {
  const { t } = useLanguage();
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const inputRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen) {
      setIsVisible(false);
      const timer = setTimeout(() => dialog.close(), window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 180);
      return () => clearTimeout(timer);
    }

    // Native modal semantics supply focus containment and make the page inert.
    dialog.showModal();
    const frame = requestAnimationFrame(() => setIsVisible(true));
    const focusTarget = window.matchMedia('(max-width: 720px)').matches ? closeRef.current : inputRef.current;
    focusTarget?.focus({ preventScroll: true });

    const originalOverflow = document.body.style.overflow;
    const originalPadding = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

    // Follow the visible viewport when a mobile keyboard opens or pans the page.
    const viewport = window.visualViewport;
    const updateViewport = () => {
      dialog.style.setProperty('--assistant-viewport-height', `${viewport?.height ?? window.innerHeight}px`);
      dialog.style.setProperty('--assistant-viewport-top', `${viewport?.offsetTop ?? 0}px`);
    };
    updateViewport();
    viewport?.addEventListener('resize', updateViewport);
    viewport?.addEventListener('scroll', updateViewport);
    window.addEventListener('resize', updateViewport);

    return () => {
      cancelAnimationFrame(frame);
      viewport?.removeEventListener('resize', updateViewport);
      viewport?.removeEventListener('scroll', updateViewport);
      window.removeEventListener('resize', updateViewport);
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPadding;
    };
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      id="portfolio-assistant"
      className="assistant-panel"
      data-visible={isVisible}
      aria-labelledby="assistant-title"
      aria-describedby="assistant-subtitle"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose();
      }}
    >
      <header className="assistant-header">
        <span className="assistant-mark" aria-hidden="true"><Sparkles size={19} /></span>
        <div className="assistant-heading">
          <div className="assistant-title-row">
            <h2 id="assistant-title">Vlad AI Assistant</h2>
            <span className="assistant-demo">{t('Demo')}</span>
          </div>
          <p id="assistant-subtitle">{t('Portfolio & Automation Assistant')}</p>
        </div>
        <button ref={closeRef} className="icon-button assistant-close" type="button" aria-label={t('Close assistant')} onClick={onClose}>
          <X size={19} aria-hidden="true" />
        </button>
      </header>
      <AssistantMessages messages={messages} isSending={isSending} isOpen={isOpen} onSend={onSend} error={error} />
      <AssistantComposer inputRef={inputRef} isSending={isSending} onSend={onSend} />
    </dialog>
  );
}

export default AssistantPanel;
