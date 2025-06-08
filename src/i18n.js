// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './../src/locales/en/common.json';
import fr from './../src/locales/fr/common.json';
import nl from './../src/locales/nl/common.json';
import de from './../src/locales/de/common.json';

i18n
  .use(initReactI18next)         // passes i18n down to react-i18next
  .use(LanguageDetector)         // auto-detects language via localStorage/browser
  .init({
    fallbackLng: 'en',           // use English if detection fails
    supportedLngs: ['en','fr','nl','de'],
    resources: {
      en: { common: en },
      fr: { common: fr },
      nl: { common: nl },
      de: { common: de},
    },
    ns: ['common'],              // your “namespace” keys
    defaultNS: 'common',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage','navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
