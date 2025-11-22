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
    <div className="flex flex-col items-center">
      <h3 className="text-xl mb-2">{t("PickInterests.title")}</h3>
      <div className="flex flex-col space-y-2">
        {Object.entries(interests).map(([key, value]) => {
          const inputId = `interest-${key}`;
          const isChecked = userInterest.includes(key as Interest)
            ? true
            : false;
          return (
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id={inputId}
                value={key}
                checked={isChecked}
                onChange={(e) => handleCheck(e.target.value as Interest)}
                className="appearance-none w-5 h-5 border-white bg-white rounded
         checked:before:content-['✓'] checked:before:text-[var(--primary)] 
         flex items-center justify-center"
              />
              <label className="text-md" htmlFor={inputId}>
                {value}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InterestPicker;
