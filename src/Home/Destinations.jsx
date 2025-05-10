import React from "react";
import "../style/Destinations.css";

const DESTINATIONS = [
  { city: "Chicago", img: "/image/chicago.webp" },
  { city: "Seattle", img: "/image/seattle.webp" },
  { city: "San Diego", img: "/image/san-diego.webp" },
  { city: "Houston", img: "/image/housto.webp" },
];

export default function Destinations() {
  return (
    <section className="dest-section">
      <div className="dest-container">
        <h2 className="dest-title">Our Destinations</h2>
        <div className="dest-grid">
          {DESTINATIONS.map(({ city, img }) => (
            <div className="dest-card" key={city}>
              <img src={img} alt={city} className="dest-img" />
              <div className="dest-content">
                <h3 className="dest-city">{city}</h3>
                <span className="dest-badge">UPTO % OFF</span>
                <p className="dest-offer">ON FLIGHTS BOOKED On-Call</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
