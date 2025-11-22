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
    <div className="flex flex-col items-center">
      <h3 className="text-xl mb-2">{t("PickAvatar.title")}</h3>
      <div className="flex gap-5">
        {Object.entries(avatars).map(([key, value]) => (
          <label className="cursor-pointer">
            <input
              type="radio"
              name="avatar"
              value={key}
              checked={chatAvatar === key}
              onChange={(e) =>
                updateUser({ chatAvatar: e.target.value as ChatAvatar })
              }
              className="peer hidden"
            />
            <div
              className="
      w-20 h-20 rounded-xl overflow-hidden
      border-2 border-transparent
      peer-checked:border-yellow-300
      peer-checked:shadow-md
      transition-all"
            >
              <img
                src={`src/assets/${key}-avatar.png`}
                alt={value}
                className="w-full h-full object-cover bg-gray-200/50"
              />
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default AvatarPicker;
