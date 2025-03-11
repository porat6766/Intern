"use client";

import { Button } from "../components/ui/button";
import { User, ListChecks, PlusCircle } from "lucide-react";
import useUserStore from "@/AppConfig/Store/userZustand";
import { useRouter } from "next/navigation";

const Header = () => {
    const { user } = useUserStore();
    const router = useRouter();

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
                        <div className="text-black cursor-pointer" onClick={() => router.push("/profile")}>
                            {user.username}
                        </div>
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
            </div>
        </header>
    );
};

export default Header;
