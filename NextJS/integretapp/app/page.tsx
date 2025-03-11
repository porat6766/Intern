import React from 'react';
import Hero from '../AppConfig/components/Hero';
import Features from '../AppConfig/components/Features';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1">
        <Hero />
        <Features />
      </main>
      <footer className="py-6 border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-sm text-gray-500">
          <p>© 2024 IntegretApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;