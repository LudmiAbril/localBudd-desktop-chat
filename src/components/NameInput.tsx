import { useTranslation } from "react-i18next";
import { useUserStore } from "../store/UserStore";

const NameInput = () => {
  const { name, updateUser } = useUserStore();
  const { t } = useTranslation();

  return (
    <div>
      <h3>{t("EnterNameTitle")}</h3>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => updateUser({ name: e.target.value as string })}
      />
    </div>
  );
};

export default NameInput;
