import { useUserStore } from "../store/UserStore";

export const useStepValidation = (currentStep: number) => {
    const { name, interest } = useUserStore();
    
    const validations: Record<number, boolean> = {
        1: true,
        2: name.trim() !== "",
        3: true,
        4: interest.length > 0,
        5: true,
    };

    const isNextDisabled = !validations[currentStep];

    return {
        isNextDisabled
    };
};
