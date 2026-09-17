import { useLanguage } from '../i18n/useLanguage.js';

const languageNames = {
  en: 'English',
  de: 'Deutsch',
  ru: 'Русский',
};

function LanguageSelector() {
  const { language, languages, setLanguage, t } = useLanguage();

  return (
    <div className="language-selector" role="group" aria-label={t('Select language')}>
      {languages.map((code) => (
        <button
          className={language === code ? 'is-active' : ''}
          type="button"
          key={code}
          aria-label={t('Switch language to {language}', { language: languageNames[code] })}
          aria-pressed={language === code}
          onClick={() => setLanguage(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default LanguageSelector;
