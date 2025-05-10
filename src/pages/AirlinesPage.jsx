import React from 'react';
import Header from '../Home/Header';
import AllAirlines from '../components/AllAirlines';
import Footer from '../Home/Footer';

export default function AirlinesPage() {
  return (
    <div className="bg-gray-50 font-sans text-gray-900">
      <Header />

      <div className="max-w-6xl mx-auto px-4">
        {/* your hero + grid of airlines */}
        <AllAirlines />
      </div>

      <Footer />
    </div>
  );
}
