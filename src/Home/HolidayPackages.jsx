import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import '../style/HolidayPackages.css';

/**
 * Replace these with real image paths under /public/images/
 */
const PACKAGES = [
  { city: 'Sydney',   img: '/image/sydney.webp'   },
  { city: 'Hawaii',   img: '/image/Hawaii.webp'   },
  { city: 'Auckland', img: '/image/auckland.webp' },
];

export default function HolidayPackages() {
  return (
    <section className="packages">
      <div className="packages__container">
        <h2 className="packages__title">Amazing Holidays Packages</h2>

        <div className="packages__grid">
          {PACKAGES.map(({ city, img }) => (
            <div className="package-card" key={city}>
              <div
                className="package-card__image"
                style={{ backgroundImage: `url(${img})` }}
              >
                <FaMapMarkerAlt className="package-card__icon" />
                <h3 className="package-card__city">{city}</h3>
              </div>
              <button className="package-card__btn">Get Quote</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
