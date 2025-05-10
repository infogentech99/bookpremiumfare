import React from 'react';
import { MenuIcon, PhoneIcon } from '@heroicons/react/outline';

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <img src="/logo.png" alt="Book Premium Fare" className="h-8" />
          <ul className="hidden md:flex space-x-6 text-sm">
            {['Flights','Blog','Terms & Conditions','Privacy Policy'].map(item => (
              <li key={item}><a href="#" className="hover:text-blue-600">{item}</a></li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+18888291141" className="flex items-center space-x-1 text-blue-600 font-medium">
            <PhoneIcon className="h-5 w-5" />
            <span>+1-888-829-1141</span>
          </a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Book Now</button>
        </div>
        <button className="md:hidden">
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
}