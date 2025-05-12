import React from 'react';
import Header from '../Home/Header';
// import HeroBooking from '../Home/HeroBooking';
import WhyAffluence from '../Home/WhyAffluence';
import Destinations from '../Home/Destinations';
import BlogSection from '../Home/AirlineSection';
import Footer from '../Home/Footer';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../Home/ServicesContent';

export default function HomePage() {
  return (
    <div className="bg-gray-50 font-sans text-gray-900">
      <Header />
      {/* <HeroBooking /> */}
      <HeroSection/>
      <div className="max-w-6xl mx-auto px-4">
        <WhyAffluence />
        <Destinations />
        <ServicesSection />
        <BlogSection />
      </div>
      <Footer />
    </div>
  );
}
