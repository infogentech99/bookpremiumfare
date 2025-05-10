// src/components/AllAirlines.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { AIRLINES } from '../data/airlines';
import "../style/AllAirlines.css";

export default function AllAirlines() {
  return (
    <div className="all-airlines">
      {/* Hero Banner */}
      <div
        className="all-airlines__hero"
        style={{ backgroundImage: "url('/image/banner2.webp')" }}
      >
        <div className="all-airlines__hero-overlay" />
        <div className="all-airlines__hero-content">
          <h1 className="all-airlines__hero-title">All Airlines</h1>
          <p className="all-airlines__hero-subtitle">
            People Don’t Take, Trips Take People
          </p>
        </div>
      </div>

      {/* Section */}
      <div className="all-airlines__container">
        <h2 className="all-airlines__heading">Airlines</h2>
        <div className="all-airlines__grid">
          {AIRLINES.map(({ name, slug, img }) => (
            <Link
              to={`/airlines/${slug}`}
              className="airlines-card"
              key={slug}
            >
              <div className="airlines-card__image">
                <img src={img} alt={name} className="airlines-card__img" />
              </div>
              <div className="airlines-card__footer">
                <span className="airlines-card__name">{name}</span>
                <span className="airlines-card__icon">
                  <FaArrowRight />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
