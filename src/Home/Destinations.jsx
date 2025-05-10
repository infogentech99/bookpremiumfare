import React from 'react';
import '../style/DestinationList.css';

// Replace these paths with your actual images under public/images/
const DESTINATIONS = [
  { city: 'Chicago',    img: '/image/chicago.webp' },
  { city: 'Seattle',    img: '/image/seattle.webp' },
  { city: 'San Diego',  img: '/image/san-diego.webp' },
  { city: 'Houston',    img: '/image/housto.webp' },
];

export default function Destinations() {
  return (
    <section className="destinations">
      <div className="destinations__container">
        <h2 className="destinations__title">Our Destination</h2>
        <div className="destinations__grid">
          {DESTINATIONS.map(({ city, img }) => (
            <div className="destination" key={city}>
              <img
                src={img}
                alt={city}
                className="destination__image"
              />
              <div className="destination__body">
                <h3 className="destination__city">{city}</h3>
                <span className="destination__badge">UPTO % OFF</span>
                <p className="destination__text">
                  ON FLIGHTS BOOKED On-Call
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
