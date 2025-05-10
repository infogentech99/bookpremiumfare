// src/pages/AirlineDetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { AIRLINES } from '../data/airlines';
import Header from '../Home/Header';
import Footer from '../Home/Footer';

export default function AirlineDetailPage() {
  const { slug } = useParams();
  const airline = AIRLINES.find(a => a.slug === slug);

  if (!airline) {
    return <div className="p-8 text-center">Airline not found.</div>;
  }

  return (
    <>
      <Header />
      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{airline.name}</h1>
        <img
          src={airline.img}
          alt={airline.name}
          className="w-full rounded-lg mb-6 shadow"
        />
        <p>
          {/* Replace with real content or fetch details from your API */}
          Welcome to {airline.name}! Here you can book flights, view offers, and
          learn all about this airline’s routes and services.
        </p>
      </div>

      <Footer/>
    </>
  );
}
