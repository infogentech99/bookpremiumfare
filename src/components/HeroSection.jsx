import React from 'react';
import '../style/HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__overlay" />

      <div className="hero__content">
        <h1 className="hero__title">Quick and Premium Flight Booking  BookPremiumFare</h1>
        <p>Fly with us—we offer premium flights and effortless booking for a luxurious experience</p>

     
      </div>
    </section>
  );
}
