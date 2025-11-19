import { ChevronDownIcon } from "raster-react";
import { useUserStore } from "../store/UserStore";
import { useTranslation } from "react-i18next";

const LanguagePicker = () => {
  const { language, updateUser } = useUserStore();
  const { t, i18n } = useTranslation();

  const languages = t("SelectLanguage.languages", {
    returnObjects: true,
  }) as Record<string, string>;

  const switchLanguage = (lang: string) => {
    updateUser({ language: lang as Language });
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl mb-2">{t("SelectLanguage.title")}</h3>
      <div className="appearance-none relative w-[12rem]">
        <select
          className="appearance-none bg-white rounded-lg border-2 border-gray-600 text-gray-600 p-1 pr-8 w-full focus:outline-none focus:ring-0"
          name="lang"
          id="lang"
          value={language}
          onChange={(e) => switchLanguage(e.target.value)}
        >
          {Object.entries(languages).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
        <ChevronDownIcon
          strokeWidth={5}
          radius={5}
          size={30}
          className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-800"
        />
      </div>
    </div>
  );
};

export default LanguagePicker;
