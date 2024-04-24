import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import english from "./locales/en/translations.json";
import polish from "./locales/pl/translations.json";
import englishZod from "zod-i18n-map/locales/en/zod.json";
import polishZod from "zod-i18n-map/locales/pl/zod.json";
import { z } from "zod";
import { zodI18nMap } from "zod-i18n-map";

export const BASE_LANGUAGE = "pl";
const FALLBACK_LANGUAGE = "pl";

export const resources = {
  en: {
    translation: english,
    zod: englishZod,
  },
  pl: {
    translation: polish,
    zod: polishZod,
  },
};

i18n.use(initReactI18next).use(LanguageDetector).init({
  lng: BASE_LANGUAGE,
  fallbackLng: FALLBACK_LANGUAGE,
  resources: resources,
});

z.setErrorMap(zodI18nMap);

export { z };
