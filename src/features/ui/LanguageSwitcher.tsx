import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { LuLanguages } from "react-icons/lu";
import { resources } from "../../lib/i18n/i18n";

const isValidLanguage = (
  language: string,
): language is keyof typeof resources => {
  return language in resources;
};

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleSelectLanguage = (ev: ChangeEvent<HTMLSelectElement>) => {
    const target = ev.target;

    if (isValidLanguage(target.value)) {
      i18n.changeLanguage(target.value);
    }
  };

  return (
    <div className="relative sm:ml-auto">
      <label
        htmlFor="language"
        className="absolute left-4 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-slate-50"
      >
        <LuLanguages />
      </label>
      <select
        name="language"
        id="language"
        onChange={handleSelectLanguage}
        defaultValue="pl"
        className="h-10 rounded-md bg-gray-950 pl-8 pr-2 text-slate-50 md:h-12"
      >
        <option value="pl">Polski</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};
