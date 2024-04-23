import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import english from "./locales/en/translations.json";
import polish from "./locales/pl/translations.json";

export const BASE_LANGUAGE = "pl";
const FALLBACK_LANGUAGE = "pl";

const resources = {
  en: {
    translation: english,
  },
  pl: {
    translation: polish,
  },
};

i18n.use(initReactI18next).use(LanguageDetector).init({
  lng: BASE_LANGUAGE,
  fallbackLng: FALLBACK_LANGUAGE,
  resources: resources,
});
