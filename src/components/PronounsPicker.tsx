import { useTranslation } from "react-i18next";
import { useUserStore } from "../store/UserStore";
import Select from "./ui/Select";

const PronounsPicker = () => {
  const { pronouns: userPronouns, updateUser } = useUserStore();
  const { t } = useTranslation();

  const pronouns = t("SelectPronouns.pronouns", {
    returnObjects: true,
  }) as Record<string, string>;

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl mb-2">{t("SelectPronouns.title")}</h3>
      <Select
        value={userPronouns}
        onChange={(value) => updateUser({ pronouns: value as Pronouns })}
        options={Object.entries(pronouns).map(([value, label]) => ({
          value,
          label,
        }))}
      />
    </div>
  );
};

export default PronounsPicker;
