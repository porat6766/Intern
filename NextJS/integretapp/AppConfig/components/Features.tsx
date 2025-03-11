
import React from 'react';
import { CheckCircle, Clock, Layout, RefreshCw } from 'lucide-react';

const Feature = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex flex-col items-center space-y-3 p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all animate-slide-from-top">
        <div className="p-3 bg-blue-50 rounded-full">{icon}</div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-gray-500 text-center">{description}</p>
    </div>
);

const Features = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold tracking-tight">Why Choose IntegretApp</h2>
                    <p className="text-gray-500 mt-2">Designed with simplicity and productivity in mind</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Feature
                        icon={<CheckCircle className="w-6 h-6 text-blue-600" />}
                        title="Simple Task Management"
                        description="Create, organize, and complete tasks with a clean and intuitive interface."
                    />
                    <Feature
                        icon={<Layout className="w-6 h-6 text-blue-600" />}
                        title="Elegant Design"
                        description="A beautiful and minimalist design that helps you focus on what matters."
                    />
                    <Feature
                        icon={<Clock className="w-6 h-6 text-blue-600" />}
                        title="Time Tracking"
                        description="Track the time spent on each task to improve your productivity."
                    />
                    <Feature
                        icon={<RefreshCw className="w-6 h-6 text-blue-600" />}
                        title="Sync Across Devices"
                        description="Access your tasks from anywhere, on any device, with real-time synchronization."
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;