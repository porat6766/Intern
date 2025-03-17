import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../app/api/auth/[...nextauth]/route';
import { Button } from '../components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../components/dropdown-menu';
import { User, ListChecks, PlusCircle, Award, Settings } from 'lucide-react';
import LogoutButton from './LogoutButton';

const Header = async () => {
    const session = await getServerSession(authOptions);
    const user = session?.user;

    const navItems = [
        { label: 'All Tasks', icon: ListChecks, href: '/tasks' },
        { label: 'Add Task', icon: PlusCircle, href: '/addTask' },
    ];

    return (
        <header className="w-full py-4 px-6 bg-white shadow-sm border-b border-slate-200 animate-fade-in">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                    IntegretApp
                </Link>

                <nav className="flex items-center space-x-2 sm:space-x-4">
                    {user && navItems.map(({ label, icon: Icon, href }) => (
                        <Link key={href} href={href} className="flex items-center gap-1 px-3 py-1.5 border rounded-md transition hover:bg-gray-100">
                            <Icon className="w-4 h-4 mr-1" />
                            <span className="hidden sm:inline">{label}</span>
                        </Link>
                    ))}

                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="flex items-center gap-2 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-md px-3 py-1.5 transition-colors">
                                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                        {user.name?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium">
                                            {user.name || user.username || user.email.split('@')[0]}
                                        </span>
                                        <span className="text-xs text-gray-500">{user.email}</span>
                                    </div>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {user.role && (
                                    <DropdownMenuItem className="flex items-center gap-2">
                                        <Award className="w-4 h-4" />
                                        <span>Role: {user.role}</span>
                                    </DropdownMenuItem>
                                )}
                                {user.isAdmin && (
                                    <DropdownMenuItem className="flex items-center gap-2">
                                        <Settings className="w-4 h-4" />
                                        <span>Admin Dashboard</span>
                                    </DropdownMenuItem>
                                )}
                                <DropdownMenuItem className="flex items-center gap-2" asChild>
                                    <Link href="/profile">
                                        <User className="w-4 h-4" />
                                        <span>Profile</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <LogoutButton />
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Button variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700 flex items-center gap-1">
                            <Link href="/login" className="flex items-center gap-1">
                                <User className="w-4 h-4 mr-1" />
                                <span className="hidden sm:inline">Login</span>
                            </Link>
                        </Button>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
