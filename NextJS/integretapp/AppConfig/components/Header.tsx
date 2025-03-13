'use client'

import { Button } from "../components/ui/button";
import { User, ListChecks, PlusCircle, Award, Settings } from "lucide-react";
import { useRouter } from "next/navigation";

import { startTransition } from "react";
import { useSession, signOut } from "next-auth/react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../components/dropdown-menu";

const Header = () => {
    const { data: session, status } = useSession();
    const router = useRouter();


    const handleLogout = async () => {
        startTransition(async () => {
            await signOut({ redirect: false });
        });
    };

    const userData = session?.user
    const isLoading = status === 'loading';

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

                    {isLoading ? (
                        <div className="animate-pulse bg-gray-200 h-8 w-20 rounded"></div>
                    ) : userData ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="flex items-center gap-2 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-md px-3 py-1.5 transition-colors">
                                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                        {userData.name?.charAt(0).toUpperCase() || userData.email?.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium">
                                            {userData.name || userData.username || userData.email.split('@')[0]}
                                        </span>
                                        <span className="text-xs text-gray-500">{userData.email}</span>

                                    </div>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {userData.role && (
                                    <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                                        <Award className="w-4 h-4" />
                                        <span>Role: {userData.role}</span>
                                    </DropdownMenuItem>
                                )}
                                {userData.isAdmin && (
                                    <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                                        <Settings className="w-4 h-4" />
                                        <span>Admin Dashboard</span>
                                    </DropdownMenuItem>
                                )}
                                <DropdownMenuItem
                                    className="flex items-center gap-2 cursor-pointer"
                                    onClick={() => router.push("/profile")}
                                >
                                    <User className="w-4 h-4" />
                                    <span>Profile</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    className="flex items-center gap-2 text-red-600 cursor-pointer"
                                    onClick={handleLogout}
                                >
                                    <span>Logout</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Button
                            variant="default"
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700 flex items-center gap-1"
                            onClick={() => router.push("/login")}
                        >
                            <User className="w-4 h-4 mr-1" />
                            <span className="hidden sm:inline cursor-pointer">Login</span>
                        </Button>
                    )}
                </nav>

            </div>
        </header>
    );
};

export default Header;