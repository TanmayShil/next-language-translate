'use client'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from "./locales/en.json";
import hi from "./locales/hi.json";
import bn from "./locales/bn.json";

const resources = {
  en: {
    translation: en,
  },
  hi: {
    translation: hi,
  },
  bn: {
    translation: bn,
  },
}

const savedLanguage =
  typeof window !== 'undefined'
    ? localStorage.getItem('language')
    : 'en'

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,

      lng: savedLanguage || 'en',

      fallbackLng: 'en',

      interpolation: {
        escapeValue: false,
      },
    })
}

// if (!i18n.isInitialized) {
//   i18n
//     .use(LanguageDetector)
//     .use(initReactI18next)
//     .init({
//       resources,
//       fallbackLng: 'en',
//       lng: 'en',

//       interpolation: {
//         escapeValue: false,
//       },
//     })
// }

export default i18n