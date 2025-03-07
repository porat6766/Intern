import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <div className="bg-gray-800 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">YouTube Tutorial</div>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/login" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white transition-colors">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link href="/signup" className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-white transition-colors">
                                SignUp
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="px-4 py-2 hover:bg-gray-700 rounded transition-colors">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/posts" className="px-4 py-2 hover:bg-gray-700 rounded transition-colors">
                                Posts
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
