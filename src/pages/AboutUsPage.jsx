// src/pages/AboutUsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Home/Header';
import Footer from '../Home/Footer';

import '../style/AboutUsPage.css';

export default function AboutUsPage() {
  return (
    <div className="about-page">
     
      <Header />

      {/* Hero / Breadcrumb */}
      <section className="about-page__hero">
        <div className="about-page__container">
          <h1 className="about-page__title">About Us</h1>
          <nav className="about-page__breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <section className="about-page__content">
        <div className="about-page__container">
          <p className="about-page__intro">
         BookPremiumFare is the one-stop place for the lowest fare flight booking with premium fare deals. We work hard to primarily ensure our clientele gets the best flying options at the lowest rates because we are concerned about the value of your time and penny with regard to travel plans. Whether you are booking a last-minute business trip or planning a long holiday, we assure you of getting value for your money. 
          </p>

          <div className="about-page__section">
            <h2 className="about-page__subtitle">Who We Are?</h2>
            <p>
            BookPremiumFare provides every possible way by which you can book flights with reputed airlines, letting you choose the ideal flight according to your schedule and pocket. Our objective is to completely furnish the clients with easy methods of air ticket booking with clear-cut prices without hidden charges.
            </p>
          </div>

          <div className="about-page__section">
            <h2 className="about-page__subtitle">What We Offer?</h2>
            <p>
             We offer the kind of premium fare deals that give you all the perks of luxury travel without gouging your wallet. Working alongside reputable airlines, we source premium fare deals that offer extra comfort and exclusive amenities to our clients.
            </p>
            <p>We offer the kind of premium fare deals that give you all the perks of luxury travel without gouging your wallet. Working alongside reputable airlines, we source premium fare deals that offer extra comfort and exclusive amenities to our clients.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
