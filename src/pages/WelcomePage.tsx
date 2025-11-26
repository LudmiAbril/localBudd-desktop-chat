import { useState, type JSX } from "react";
import LanguagePicker from "../components/LanguagePicker";
import NameInput from "../components/NameInput";
import PronounsPicker from "../components/PronounsPicker";
import InterestPicker from "../components/InterestPicker";
import AvatarPicker from "../components/AvatarPicker";
import Button from "../components/ui/Button";
import { useStepValidation } from "../hooks/UserConfigStepValidator";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const WelcomePage = () => {
  const [step, setStep] = useState<number>(1);
  const { isNextDisabled } = useStepValidation(step);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const steps: { [key: string]: JSX.Element } = {
    "1": <LanguagePicker />,
    "2": <NameInput />,
    "3": <PronounsPicker />,
    "4": <InterestPicker />,
    "5": <AvatarPicker />,
  };

  const nextStep = () => {
    if (step === Object.entries(steps).length) {
      navigate("/intro");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const goBack = () => {
    if (step === 1) return;
    setStep((prev) => prev - 1);
  };

  const nextButtonText =
    step === Object.entries(steps).length
      ? t("buttons.finish")
      : t("buttons.next");

  const isBackButtonDisabled = step === 1;

  return (
    <div className="bg-[var(--bg-color)] w-screen h-screen flex items-center justify-center">
      <div className="w-fit flex flex-col items-center">
        <h3 className="pixelify mb-3 text-4xl text-white">
          {t("WelcomePageTitle")}
        </h3>
        {steps[step]}
        <div className="flex gap-10 mt-10">
          <Button disabled={isBackButtonDisabled} onClick={goBack}>
            {t("buttons.back")}
          </Button>
          <Button disabled={isNextDisabled} onClick={nextStep}>
            {nextButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
