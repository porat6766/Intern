import React from 'react';

const Header = () => {
    return (
        <div className="bg-gray-800 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">YouTube Tutorial</div>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="/login" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white transition-colors">
                                Login
                            </a>
                        </li>
                        <li>
                            <a href="/signup" className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-white transition-colors">
                                SignUp
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="px-4 py-2 hover:bg-gray-700 rounded transition-colors">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/posts" className="px-4 py-2 hover:bg-gray-700 rounded transition-colors">
                                Posts
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;