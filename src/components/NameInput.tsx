import { useTranslation } from "react-i18next";
import { useUserStore } from "../store/UserStore";

const NameInput = () => {
  const { name, updateUser } = useUserStore();
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl mb-2">{t("EnterName.title")}</h3>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => updateUser({ name: e.target.value as string })}
        className="input-base max-w-60 placeholder-gray-400"
        placeholder={t("EnterName.placeholder")}
      />
    </div>
  );
};

export default NameInput;
