import { create } from 'zustand';

interface UserStoreProps {
    name: string;
    pronouns: Pronouns;
    language: Language;
    chatAvatar: ChatAvatar;
    interest: Interest[];
    updateUser: (updates: Partial<UserStoreProps>) => void;
}

export const useUserStore = create<UserStoreProps>()((set) => ({
    name: "user",
    pronouns: "he/him",
    language: 'en',
    chatAvatar: 'bunny',
    interest: ["coding"],
    updateUser: (updates: Partial<UserStoreProps>) => set((prev) => ({ ...prev, ...updates })),
}))