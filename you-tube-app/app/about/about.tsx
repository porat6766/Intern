"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import whatsApp from "../../assets/whatsapp.png";

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center">
            <div className="relative w-full h-96 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/assets/about-bg.jpg')", // Replace with your background image
                        transform: "translateZ(-10px) scale(2)",
                    }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div
                        className={`text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                    >
                        <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
                        <p className="text-xl text-white">Discover Our Story and Commitment</p>
                    </div>
                </div>
            </div>

            {/* Company Overview */}
            <div className="container mx-auto px-6 py-12 max-w-5xl">
                <div
                    className={`bg-white rounded-xl shadow-lg p-8 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Who We Are</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Welcome to Horizon Solutions! Since our founding in 2010, we’ve been dedicated to providing innovative,
                        high-quality services that empower businesses and individuals alike. Our team of experts combines decades
                        of experience with a passion for excellence, ensuring that every project we undertake exceeds expectations.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Based in the heart of the city, we serve clients globally, delivering tailored solutions that address unique
                        challenges. From cutting-edge technology to exceptional customer support, we’re here to make a difference.
                    </p>
                </div>

                {/* Our Mission */}
                <div
                    className={`bg-blue-50 rounded-xl shadow-lg p-8 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Mission</h2>
                    <blockquote className="border-l-4 border-blue-500 pl-6 py-2 italic text-gray-600 text-lg">
                        "To inspire progress and deliver unparalleled value through innovation, integrity, and collaboration."
                    </blockquote>
                    <p className="text-lg text-gray-700 leading-relaxed mt-4">
                        We believe in building lasting relationships with our clients, fostering a culture of trust, and driving
                        positive change in every community we touch.
                    </p>
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-gray-50 w-full py-16">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <div
                            className={`bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-700 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                }`}
                        >
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-300" /> {/* Placeholder for photo */}
                            <h3 className="text-xl font-bold text-gray-800">Sarah Johnson</h3>
                            <p className="text-blue-600 mb-2">CEO & Founder</p>
                            <p className="text-gray-700">With over 20 years of leadership experience, Sarah drives our vision forward.</p>
                        </div>

                        {/* Team Member 2 */}
                        <div
                            className={`bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-700 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                }`}
                        >
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-300" /> {/* Placeholder for photo */}
                            <h3 className="text-xl font-bold text-gray-800">Michael Chen</h3>
                            <p className="text-blue-600 mb-2">Chief Technology Officer</p>
                            <p className="text-gray-700">Michael leads our tech innovations with a focus on cutting-edge solutions.</p>
                        </div>

                        {/* Team Member 3 */}
                        <div
                            className={`bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-700 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                }`}
                        >
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-300" /> {/* Placeholder for photo */}
                            <h3 className="text-xl font-bold text-gray-800">Emily Rodriguez</h3>
                            <p className="text-blue-600 mb-2">Head of Customer Success</p>
                            <p className="text-gray-700">Emily ensures every client experience is seamless and exceptional.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-blue-600 py-16 w-full">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold text-center text-white mb-12">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="text-yellow-400 flex mb-4 justify-center">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4">
                                "Horizon Solutions transformed our business with their innovative approach. Highly recommended!"
                            </p>
                            <p className="font-bold text-gray-900">James Carter - CEO, BrightFuture Inc.</p>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="text-yellow-400 flex mb-4 justify-center">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4">
                                "Their team’s dedication and expertise are unmatched. A true partner in our success."
                            </p>
                            <p className="font-bold text-gray-900">Linda Patel - Operations Manager, TechTrend</p>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="text-yellow-400 flex mb-4 justify-center">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4">
                                "Exceptional service and support. They’ve exceeded our expectations every time."
                            </p>
                            <p className="font-bold text-gray-900">David Kim - Director, Innovate Solutions</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 left-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
            >
                <Image src={whatsApp.src} alt="WhatsApp" width={28} height={28} className="w-7 h-7" />
            </a>
        </div>
    );
};

export default About;