import { useState, type JSX } from "react"
import LanguagePicker from "../components/LanguagePicker";
import NameInput from "../components/NameInput";
import PronounsPicker from "../components/PronounsPicker";
import InterestPicker from "../components/InterestPicker";
import CustomAvatar from "../components/CustomAvatar";

const WelcomePage = () => {
    const [step, setStep] = useState<number>(1);

    const steps: { [key: string]: JSX.Element } = {
        "1": <LanguagePicker />,
        "2": <NameInput />,
        "3": <PronounsPicker />,
        "4": <InterestPicker />,
        "5": <CustomAvatar />,
    };

    return (
        <div>
            <h3>Welcome!</h3>
            {steps[step]}
        </div>
    )
}

export default WelcomePage