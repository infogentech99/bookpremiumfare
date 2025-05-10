// src/components/Hero.jsx
import React, { useState } from 'react';
// 1. Import your banner from wherever you put it in src/assets
import bannerImg from '../../public/banner/banner01.webp';

export default function Hero() {
  const [tripType, setTripType] = useState('round');

  return (
    <section
      className="relative bg-cover bg-center h-[500px] flex items-center"
      // 2. Use the imported image in your style prop
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-heroBlue opacity-70"></div>

      <div className="relative max-w-6xl mx-auto px-4 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
         Quick and Premium Flight Booking | BookPremiumFare
        </h1>

        <form className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm grid gap-4 md:grid-cols-3 lg:grid-cols-6 items-end">
          {/* Trip type radios */}
          <div className="col-span-full md:col-span-2 flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="trip"
                value="round"
                checked={tripType === 'round'}
                onChange={() => setTripType('round')}
                className="accent-blue-400"
              />
              <span>Round Trip</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="trip"
                value="oneway"
                checked={tripType === 'oneway'}
                onChange={() => setTripType('oneway')}
                className="accent-blue-400"
              />
              <span>One Way</span>
            </label>
          </div>

          {/* Inputs */}
          <input
            type="text"
            placeholder="Flying From"
            className="p-2 rounded border border-white/50 bg-white/30 placeholder-white text-white focus:outline-none col-span-full md:col-auto"
          />
          <input
            type="text"
            placeholder="Flying To"
            className="p-2 rounded border border-white/50 bg-white/30 placeholder-white text-white focus:outline-none col-span-full md:col-auto"
          />
          <input
            type="date"
            className="p-2 rounded border border-white/50 bg-white/30 text-white focus:outline-none"
          />
          {tripType === 'round' && (
            <input
              type="date"
              className="p-2 rounded border border-white/50 bg-white/30 text-white focus:outline-none"
            />
          )}
          <select className="p-2 rounded border border-white/50 bg-white/30 text-white focus:outline-none col-span-full md:col-auto">
            <option>Economy – 1 Adult</option>
            <option>Business – 1 Adult</option>
          </select>

          {/* Submit */}
          <button
            type="submit"
            className="col-span-full md:col-auto bg-primary text-white py-2 px-6 rounded hover:bg-blue-700 transition"
          >
            Search Flights
          </button>
        </form>
      </div>
    </section>
  );
}
