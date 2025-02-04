import enTranslations from './locales/en'
import viTranslations from './locales/vi'

const translations = {
  en: enTranslations,
  vi: viTranslations,
};

export const t = (key) => {
  const currentLocale = document.querySelector('meta[name="current-locale"]')?.content || window.currentLocale;
  const keys = key.split('.');
  keys.unshift(currentLocale)
  let result = translations[currentLocale];

  keys.forEach((k) => {
    result = result?.[k];
  });

  return result || key;
};
