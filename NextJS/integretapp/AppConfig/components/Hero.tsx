
import React from 'react';
import { Button } from "../components/ui/button";

const Hero = () => {
    return (
        <section className="py-12 md:py-24 animate-fade-in">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Organize Your Tasks with Elegance
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                            A simple and elegant way to manage your daily tasks, projects, and goals.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 min-[400px]:gap-4">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                            Get Started
                        </Button>
                        <Button size="lg" variant="outline">
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;