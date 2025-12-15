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
      <div className="mt-3 flex gap-10">
        {Object.entries(avatars).map(([key, value]) => (
          <label className="cursor-pointer text-center">
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
      peer-checked:border-[var(--secondary)]
      peer-checked:shadow-md
      transition-all"
            >
              <img
                src={new URL(`../assets/${key}-avatar.png`, import.meta.url).href}
                alt={value}
                className="w-full h-full object-cover bg-gray-200/30"
              />
            </div>
            <p className="mt-1 text-lg">{value}</p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default AvatarPicker;
