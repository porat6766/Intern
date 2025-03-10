import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

interface User {
    email: string;
    password: string;
}

interface UserState {
    user: User | null;
    setUser: (user: User) => void;
    clearUser: () => void;
}

interface UsersState {
    users: User[];
    addUser: (user: User) => void;
    removeUser: (email: string) => void;
    setUsers: (users: User[]) => void;
    clearUsers: () => void;
}

// Adding middleware for persistence and logging
export const useUserStore = create<UserState>()(
    devtools(
        persist(
            (set) => ({
                user: null,
                setUser: (user: User) => set({ user }),
                clearUser: () => set({ user: null }),
            }),
            {
                name: 'user-storage', // name of the storage key
                getStorage: () => localStorage, // Using localStorage
            }
        ),
        { name: 'user-store' } // Optional devtools name for debugging
    )
);

export const useUsersStore = create<UsersState>()(
    devtools(
        (set) => ({
            users: [],
            addUser: (user: User) =>
                set((state) => ({ users: [...state.users, user] })),
            removeUser: (email: string) =>
                set((state) => ({
/*************  ✨ Codeium Command ⭐  *************/
        /**
         * Removes a user from the list of users by email
         * @param email Email of the user to remove
         */
/******  46253056-20fe-4067-ae92-2fccb36d17ee  *******/                    users: state.users.filter((user) => user.email !== email),
                })),
            setUsers: (users: User[]) => set(() => ({ users })),
            clearUsers: () => set(() => ({ users: [] })),
        }),
        { name: 'users-store' } // Optional devtools name for debugging
    )
);
