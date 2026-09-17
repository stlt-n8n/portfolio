import { Sparkles } from 'lucide-react';
import { useLanguage } from '../../i18n/useLanguage.js';

function AssistantLauncher({ isOpen, onOpen }) {
  const { t } = useLanguage();
  return (
    <button
      className={`assistant-launcher button button-secondary${isOpen ? ' is-open' : ''}`}
      type="button"
      aria-label={t('Ask AI — open Vlad AI Assistant')}
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      aria-controls="portfolio-assistant"
      onClick={onOpen}
    >
      <Sparkles size={19} aria-hidden="true" />
      <span>{t('Ask AI')}</span>
    </button>
  );
}

export default AssistantLauncher;
