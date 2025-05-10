// src/components/HeroBooking.jsx

import React, { useState } from 'react'
import '../style/HeroBooking.css';
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
  FaUsers,
} from 'react-icons/fa'

export default function HeroBooking() {
  const [tripType, setTripType] = useState('round')

  return (
    <section className="hero-section">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">Quick and Premium Flight Booking | BookPremiumFare</h1>
        <p>Fly with us—we offer premium flights and effortless booking for a luxurious experience</p>

       
      </div>
    </section>
  )
}
