import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import App from './App.jsx'
import './index.css'

import enTranslation from '../public/translations/en.json';
import frTranslation from '../public/translations/fr.json';

i18n
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      fr: {
        translation: frTranslation,
      },
      // Add more languages as needed
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language in case selected language file is missing
    interpolation: {
      escapeValue: false,
    },
  });

  ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </React.StrictMode>
    
)
