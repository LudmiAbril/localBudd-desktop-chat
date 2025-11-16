import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserStoreProps {
    name: string;
    pronouns: Pronouns;
    language: Language;
    chatAvatar: ChatAvatar;
    interest: Interest[];
    configured: boolean;
    updateUser: (updates: Partial<UserStoreProps>) => void;
}

export const useUserStore = create<UserStoreProps>()(
    persist(
        (set) => ({
            name: "",
            pronouns: "he/him",
            language: "en",
            chatAvatar: "bunny",
            interest: ["coding"],
            configured: false,
            updateUser: (updates: Partial<UserStoreProps>) =>
                set((prev) => ({ ...prev, ...updates })),
        }),
        {
            name: "user-store",
        }
    )
);