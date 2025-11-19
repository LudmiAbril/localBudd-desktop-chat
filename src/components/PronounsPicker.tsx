import { useTranslation } from "react-i18next";
import { useUserStore } from "../store/UserStore";

const PronounsPicker = () => {
  const { pronouns: userPronouns, updateUser } = useUserStore();
  const { t } = useTranslation();

  const pronouns = t("SelectPronouns.pronouns", {
    returnObjects: true,
  }) as Record<string, string>;

  return (
    <div>
      <h3>{t("SelectPronouns.title")}</h3>
      <select
        name="pronouns"
        id="pronouns"
        value={userPronouns}
        onChange={(e) => updateUser({ pronouns: e.target.value as Pronouns })}
      >
        {Object.entries(pronouns).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PronounsPicker;
