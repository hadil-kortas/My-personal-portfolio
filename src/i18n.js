import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/common.json';

const langModules = {
  fr: () => import('./locales/fr/common.json'),
  nl: () => import('./locales/nl/common.json'),
  de: () => import('./locales/de/common.json'),
};

const loadAndAddLanguage = async (lng) => {
  if (lng === 'en' || !langModules[lng] || i18n.hasResourceBundle(lng, 'common')) return;
  const module = await langModules[lng]();
  i18n.addResourceBundle(lng, 'common', module.default);
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr', 'nl', 'de'],
    resources: { en: { common: en } },
    ns: ['common'],
    defaultNS: 'common',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

i18n.on('initialized', () => loadAndAddLanguage(i18n.language));
i18n.on('languageChanged', (lng) => loadAndAddLanguage(lng));

export default i18n;
