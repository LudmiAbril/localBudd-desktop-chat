import { useState, type JSX } from "react"
import LanguagePicker from "../components/LanguagePicker";
import NameInput from "../components/NameInput";
import PronounsPicker from "../components/PronounsPicker";
import InterestPicker from "../components/InterestPicker";
import AvatarPicker from "../components/AvatarPicker";
import { useUserStore } from "../store/UserStore";
import Button from "../components/ui/Button";
import { useStepValidation } from "../hooks/UserConfigStepValidator";
import Introduction from "../components/Introduction";

const WelcomePage = () => {
    const [step, setStep] = useState<number>(1);
    const { language } = useUserStore();
    const { isNextDisabled } = useStepValidation(step);

    const steps: { [key: string]: JSX.Element } = {
        "1": <LanguagePicker />,
        "2": <NameInput />,
        "3": <PronounsPicker />,
        "4": <InterestPicker />,
        "5": <AvatarPicker />,
        "6": <Introduction />,
    };

    const nextStep = () => {
        if (step === Object.entries(steps).length) return;
        setStep((prev) => prev + 1);
    }

    const goBack = () => {
        if (step === 1) return;
        setStep((prev) => prev - 1);
    }

    const welcomeText = language === "en" ? "Welcome!" : "Bienvenido!";

    const backText = language === "en" ? "Back" : "Volver";

    const nextText = language === "en" ? "Next" : "Continuar";

    const finishText = language === "en" ? "Finish" : "Finalizar";

    const nextButtonText = step === Object.entries(steps).length ? finishText : nextText;

    return (
        <div>
            <h3>{welcomeText}</h3>
            {steps[step]}
            {step !== 6 &&
                <div className="flex gap-10">
                    <Button onClick={goBack}>{backText}</Button>
                    <Button disabled={isNextDisabled} onClick={nextStep}>{nextButtonText}</Button>
                </div>
            }
        </div>
    )
}

export default WelcomePage