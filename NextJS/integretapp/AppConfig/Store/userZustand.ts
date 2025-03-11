import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IUserSignUp } from "../Types/User";

interface UserState {
    user: IUserSignUp | null;
    setUser: (user: IUserSignUp) => void;
}

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user: IUserSignUp) => set({ user }),
        }),
        {
            name: "user-storage",
        }
    )
);

export default useUserStore;
