export const LANGUAGE_STORAGE_KEY = 'portfolio-language';
export const SUPPORTED_LANGUAGES = ['en', 'de', 'ru'];

export function detectBrowserLanguage(languages = [], language = '') {
  const primaryLanguage = languages[0] || language || 'en';
  const baseLanguage = primaryLanguage.toLowerCase().split(/[-_]/)[0];
  return SUPPORTED_LANGUAGES.includes(baseLanguage) ? baseLanguage : 'en';
}

export function resolveInitialLanguage({ storage, navigatorObject } = {}) {
  const browser = navigatorObject ?? globalThis.navigator;

  try {
    const languageStorage = storage ?? globalThis.localStorage;
    const savedLanguage = languageStorage?.getItem(LANGUAGE_STORAGE_KEY);
    if (SUPPORTED_LANGUAGES.includes(savedLanguage)) return savedLanguage;
  } catch {
    // Storage can be unavailable in privacy-restricted browser contexts.
  }

  return detectBrowserLanguage(browser?.languages, browser?.language);
}
