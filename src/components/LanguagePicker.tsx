import { useUserStore } from "../store/UserStore";
import { useTranslation } from "react-i18next";
import Select from "./ui/Select";

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
      <Select
        value={language}
        onChange={switchLanguage}
        options={Object.entries(languages).map(([value, label]) => ({
          value,
          label,
        }))}
      />
    </div>
  );
};

export default LanguagePicker;
