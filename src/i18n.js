import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: 'en', // Default language
    resources: {
      en: {
        translation: {
          // English translations
        },
      },
      fr: {
        translation: {
              // French translations
              FullStackWebDeveloper : "Développeur Web FullStack",
          
        },
      },
      // Add more languages as needed
    },
    interpolation: {
      escapeValue: false, // React already safely escapes values
    },
  });

export default i18n;