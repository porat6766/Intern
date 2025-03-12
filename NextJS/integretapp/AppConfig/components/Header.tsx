'use client'

import { Button } from "../components/ui/button";
import { User, ListChecks, PlusCircle } from "lucide-react";
import useUserStore from "@/AppConfig/Store/userZustand";
import { useRouter } from "next/navigation";
import { useActionState } from "react";
import { logoutAction } from "../actions/auth";
import { startTransition } from "react";

const initialState = {
    message: null,
    error: "",
    loading: false,
};

const Header = () => {
    const { user, setUser } = useUserStore();  // ensure you have setUser in your store
    const router = useRouter();

    const [state, performLogout] = useActionState(logoutAction, initialState);

    const handleLogout = async () => {
        startTransition(() => {
            performLogout();
            localStorage.removeItem("user-storage");
            setUser(null);  // Reset user in Zustand store
            window.location.reload();
        });
    };

    return (
        <header className="w-full py-4 px-6 bg-white shadow-sm border-b border-slate-200 animate-fade-in">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center cursor-pointer" onClick={() => router.push("/")}>
                    <h1 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                        IntegretApp
                    </h1>
                </div>

                <nav className="flex items-center space-x-2 sm:space-x-4">
                    <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1 transition-all hover:bg-blue-50"
                        onClick={() => router.push("/tasks")}
                    >
                        <ListChecks className="w-4 h-4 mr-1" />
                        <span className="hidden sm:inline">All Tasks</span>
                    </Button>

                    <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1 transition-all hover:bg-green-50"
                        onClick={() => router.push("/addTask")}
                    >
                        <PlusCircle className="w-4 h-4 mr-1" />
                        <span className="hidden sm:inline">Add Task</span>
                    </Button>

                    {user ? (
                        <>
                            <div className="text-black cursor-pointer" onClick={() => router.push("/profile")}>
                                {user.username}
                            </div>
                            <Button
                                variant="default"
                                size="sm"
                                className="bg-red-600 hover:bg-red-700 flex items-center gap-1"
                                onClick={handleLogout}
                            >
                                <User className="w-4 h-4 mr-1" />
                                <span className="hidden sm:inline">Logout</span>
                            </Button>
                        </>
                    ) : (
                        <Button
                            variant="default"
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700 flex items-center gap-1"
                            onClick={() => router.push("/login")}
                        >
                            <User className="w-4 h-4 mr-1" />
                            <span className="hidden sm:inline">Login</span>
                        </Button>
                    )}
                </nav>

                {/* Display Loading and Error State */}
                {state.loading && <div>Logging out...</div>}
                {state.error && <div className="text-red-500">{state.error}</div>}
            </div>
        </header>
    );
};

export default Header;
