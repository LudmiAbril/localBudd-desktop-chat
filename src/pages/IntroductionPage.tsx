import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { useUserStore } from "../store/UserStore";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const IntroductionPage = () => {
  const { updateUser, name, chatAvatar } = useUserStore();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const texts = t("Introduction.texts", {
    returnObjects: true,
    avatar: chatAvatar,
  }) as string[];

  const handleNext = () => {
    if (step === 2) {
      updateUser({ configured: true });
      navigate("/");
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const nextButtontext = step === 2 ? t("buttons.start") : t("buttons.next");

  const image =
    step === 0 ? `avatar-full-${chatAvatar}.png` : `avatar-ui-${step}.jpg`;

  return (
    <div className="bg-[var(--bg-color)] min-h-screen flex flex-col items-center justify-center">
      <h3 className="text-3xl mb-3">
        {t("Introduction.title", { username: name })}
      </h3>
      <p className="text-lg max-w-[40rem] text-center">{texts[step]}</p>
      <img
        src={`/src/assets/${image}`}
        alt="interfaz"
        width={180}
        className="my-7"
      />
      <Button onClick={handleNext}>{nextButtontext}</Button>
    </div>
  );
};

export default IntroductionPage;
