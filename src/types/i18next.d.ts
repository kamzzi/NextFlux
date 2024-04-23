import "i18next";
import { BASE_LANGUAGE } from "../lib/i18n/i18n";
import english from "../lib/i18n/locales/en/translations.json";
import polish from "../lib/i18n/locales/pl/translations.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof BASE_LANGUAGE;
    resources: {
      en: typeof english;
      pl: typeof polish;
    };
  }
}
