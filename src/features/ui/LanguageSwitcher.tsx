import { LuLanguages } from "react-icons/lu";

export const LanguageSwitcher = () => {
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
        className="h-10 rounded-md bg-gray-950 pl-8 pr-2 text-slate-50 md:h-12"
      >
        <option value="en">English</option>
        <option value="pl">Polski</option>
      </select>
    </div>
  );
};
