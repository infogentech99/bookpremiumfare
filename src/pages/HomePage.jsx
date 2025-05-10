import React from 'react';
import Header from '../Home/Header';
import HeroBooking from '../Home/HeroBooking';
import WhyAffluence from '../Home/WhyAffluence';
import Destinations from '../Home/Destinations';
import BlogSection from '../Home/BlogSection';
import Footer from '../Home/Footer';

export default function HomePage() {
  return (
    <div className="bg-gray-50 font-sans text-gray-900">
      <Header />
      <HeroBooking />
      <div className="max-w-6xl mx-auto px-4">
        <WhyAffluence />
        <Destinations />
        <BlogSection />
      </div>
      <Footer />
    </div>
  );
}
