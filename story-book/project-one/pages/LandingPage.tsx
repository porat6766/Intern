import React from 'react';
import Button from '../components/Button';

const LandingPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-8">
            <h1 className="text-4xl font-bold text-gray-900">Welcome to Our Product</h1>
            <p className="text-lg text-gray-600 mt-4">
                Build, design, and test UI components efficiently with Storybook!
            </p>
            <Button variant="primary" className="mt-6">Get Started</Button>
        </div>
    );
};

export default LandingPage;
