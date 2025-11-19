import { useTranslation } from "react-i18next";
import { useUserStore } from "../store/UserStore";

const InterestPicker = () => {
  const { interest: userInterest, updateUser } = useUserStore();
  const { t } = useTranslation();

  const interests = t("PickInterests.interests", {
    returnObjects: true,
  }) as Record<string, string>;

  const handleCheck = (interest: Interest) => {
    const updatedInterests: Interest[] = userInterest.includes(interest)
      ? userInterest.filter((i) => i !== interest)
      : [...userInterest, interest];

    updateUser({ interest: updatedInterests });
  };

  return (
    <div>
      <h3>{t("PickInterests.title")}</h3>
      {Object.entries(interests).map(([key, value]) => {
        const inputId = `interest-${key}`;
        const isChecked = userInterest.includes(key as Interest) ? true : false;
        return (
          <div>
            <input
              type="checkbox"
              id={inputId}
              value={key}
              checked={isChecked}
              onChange={(e) => handleCheck(e.target.value as Interest)}
            />
            <label htmlFor={inputId}>{value}</label>
          </div>
        );
      })}
    </div>
  );
};

export default InterestPicker;
