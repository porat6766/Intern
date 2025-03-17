'use client';

import { signOut } from 'next-auth/react';
import { DropdownMenuItem } from '../components/dropdown-menu';

const LogoutButton = () => {
    return (
        <DropdownMenuItem className="flex items-center gap-2 text-red-600" onClick={() => signOut()}>
            <span>Logout</span>
        </DropdownMenuItem>
    );
};

export default LogoutButton;
