// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import enTranslation from './locales/en.json';
import hiTranslation from './locales/hi.json';
import enTranslation from './locales/en.json';
import pnTranslation from './locales/pn.json';
import mrTranslation from './locales/mr.json';
import gjTranslation from './locales/gj.json';
import teTranslation from './locales/te.json';



i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation
    },
    hi: {
      translation: hiTranslation
    },    
    pn: {
      translation: pnTranslation
    } ,
    mr: {
      translation: mrTranslation
    },    
    gj: {
      translation: gjTranslation
    },    
    te: {
      translation: teTranslation
    }
  },
  lng: 'en', // Default language
  fallbackLng: 'hi', // Fallback language if translation is missing
  interpolation: {
    escapeValue: false // React components can be interpolated
  }
});

export default i18n;
