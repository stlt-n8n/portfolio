import { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { de } from './de.js';
import { en } from './en.js';
import { ru } from './ru.js';
import {
  LANGUAGE_STORAGE_KEY,
  resolveInitialLanguage,
  SUPPORTED_LANGUAGES,
} from './languageConfig.js';
import { LanguageContext } from './useLanguage.js';

const locales = { en, de, ru };

function interpolate(value, variables) {
  if (!variables) return value;
  return Object.entries(variables).reduce(
    (result, [key, replacement]) => result.replaceAll(`{${key}}`, String(replacement)),
    value,
  );
}

function localizeContent(value, translate) {
  if (typeof value === 'string') return translate(value);
  if (Array.isArray(value)) return value.map((item) => localizeContent(item, translate));
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, localizeContent(item, translate)]),
    );
  }
  return value;
}

function updateMetaContent(translate, language) {
  const description = translate(
    'Vladyslav Lukianov is an AI Automation & IT Specialist who builds practical n8n workflows, business automations, and operational tools.',
  );
  const socialDescription = translate(
    'Explore practical AI automation, n8n workflows, Google Sheets, Telegram, and operational reporting projects by Vladyslav Lukianov.',
  );
  const twitterDescription = translate(
    'Practical AI automation, n8n workflow, and IT projects by Vladyslav Lukianov.',
  );
  const title = translate('Vladyslav Lukianov — AI Automation & IT Specialist');

  document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', socialDescription);
  document.querySelector('meta[property="og:locale"]')?.setAttribute(
    'content',
    { en: 'en_US', de: 'de_DE', ru: 'ru_RU' }[language],
  );
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', twitterDescription);
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    const initialLanguage = resolveInitialLanguage();
    document.documentElement.lang = initialLanguage;
    return initialLanguage;
  });

  const translations = locales[language].translations;
  const t = useCallback(
    (source, variables) => interpolate(translations[source] ?? source, variables),
    [translations],
  );

  const setLanguage = useCallback((nextLanguage) => {
    if (!SUPPORTED_LANGUAGES.includes(nextLanguage)) return;
    try {
      globalThis.localStorage?.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    } catch {
      // Keep the in-memory selection even if persistence is unavailable.
    }
    setLanguageState(nextLanguage);
  }, []);

  useLayoutEffect(() => {
    document.documentElement.lang = language;
    updateMetaContent(t, language);
  }, [language, t]);

  const content = useMemo(() => localizeContent(en.content, t), [t]);
  const value = useMemo(
    () => ({ language, setLanguage, t, content, languages: SUPPORTED_LANGUAGES }),
    [content, language, setLanguage, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
