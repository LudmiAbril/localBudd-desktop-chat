import { useState, type JSX } from "react"
import LanguagePicker from "../components/LanguagePicker";
import NameInput from "../components/NameInput";
import PronounsPicker from "../components/PronounsPicker";
import InterestPicker from "../components/InterestPicker";
import AvatarPicker from "../components/AvatarPicker";
import { useUserStore } from "../store/UserStore";

const WelcomePage = () => {
    const [step, setStep] = useState<number>(1);
    const {language} = useUserStore();

    const steps: { [key: string]: JSX.Element } = {
        "1": <LanguagePicker />,
        "2": <NameInput />,
        "3": <PronounsPicker />,
        "4": <InterestPicker />,
        "5": <AvatarPicker />,
    };

    const nextStep = () => {
        if (step === Object.entries(steps).length) return;
        setStep((prev) => prev + 1);
    }

    const goBack = () => {
        if (step === 1) return;
        setStep((prev) => prev - 1);
    }

    const welcomeText = language === "en" ? "Welcome!" : "Bienvenido!"

    return (
        <div>
            <h3>{welcomeText}</h3>
            {steps[step]}
            <button onClick={goBack}>back</button>
            <button onClick={nextStep}>next</button>
        </div>
    )
}

export default WelcomePage