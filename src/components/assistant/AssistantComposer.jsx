import { useLayoutEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { ASSISTANT_MESSAGE_LIMIT } from '../../services/assistantService.js';
import { useLanguage } from '../../i18n/useLanguage.js';

function AssistantComposer({ inputRef, isSending, onSend }) {
  const { t } = useLanguage();
  const [draft, setDraft] = useState('');
  const canSend = Boolean(draft.trim()) && draft.length <= ASSISTANT_MESSAGE_LIMIT && !isSending;

  useLayoutEffect(() => {
    const input = inputRef.current;
    input.style.height = 'auto';
    input.style.height = `${Math.min(input.scrollHeight, 112)}px`;
  }, [draft, inputRef]);

  const submit = (event) => {
    event.preventDefault();
    if (!canSend) return;
    onSend(draft);
    setDraft('');
    inputRef.current.focus({ preventScroll: true });
  };

  return (
    <form className="assistant-composer" onSubmit={submit}>
      <div className="assistant-input-wrap">
        <textarea
          ref={inputRef}
          rows={1}
          value={draft}
          onChange={(event) => setDraft(event.target.value.slice(0, ASSISTANT_MESSAGE_LIMIT))}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing && event.keyCode !== 229) submit(event);
          }}
          maxLength={ASSISTANT_MESSAGE_LIMIT}
          aria-label={t('Message Vlad AI Assistant')}
          aria-describedby="assistant-composer-note"
          placeholder={t("Ask about Vlad's work...")}
        />
        <button className="assistant-send" type="submit" aria-label={t('Send message')} disabled={!canSend}>
          <ArrowUp size={20} aria-hidden="true" />
        </button>
      </div>
      <div id="assistant-composer-note" className="assistant-composer-note">
        <span>{t('Demo preview · Messages stay in this tab · Live functionality is coming soon.')}</span>
        {draft.length >= ASSISTANT_MESSAGE_LIMIT - 200 && <span>{draft.length}/{ASSISTANT_MESSAGE_LIMIT}</span>}
      </div>
    </form>
  );
}

export default AssistantComposer;
