import { useTranslation } from "react-i18next";
import { useUserStore } from "../store/UserStore";

const AvatarPicker = () => {
  const { updateUser, chatAvatar } = useUserStore();
  const { t } = useTranslation();
  const avatars = t("PickAvatar.avatars", { returnObjects: true }) as Record<
    string,
    string
  >;

  return (
    <div>
      <h3>{t("PickAvatar.title")}</h3>
      <select
        name="avatar"
        id="avatar"
        value={chatAvatar}
        onChange={(e) =>
          updateUser({ chatAvatar: e.target.value as ChatAvatar })
        }
      >
        {Object.entries(avatars).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AvatarPicker;
