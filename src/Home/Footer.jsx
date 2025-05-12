import React from 'react';
import '../style/Footer.css';
import logo from '../../public/image/whitelogo.png';

export default function Footer() {
  const disclaimer =
    'BookPremiumFare.com acts solely as a booking platform and is not responsible for airline policies, delays, or cancellations. All bookings are subject to airline terms and conditions.';
  const quickLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Refund Policy', href: '/refund' },
  ];
  const airlines = [
    'Asiana Airlines',
    'Air Canada',
    'Alaska Airlines',
    'Lufthansa',
    'Qatar Airways',
    'United Airlines',
    'Turkish Airlines',
    'Southwest Airlines',
    'Saudia',
    'Singapore Airlines',
  ];
  const destinations = [
    'Hawaii',
    'Atlanta',
    'New York',
    'Las Vegas',
    'Miami',
    'Los Angeles',
    'Orlando',
    'San Francisco',
    'New Orleans',
    'Boston',
  ];
  const payments = [
    '/images/payments/mastercard.svg',
    '/images/payments/visa.svg',
    '/images/payments/amex.svg',
    '/images/payments/discover.svg',
    '/images/payments/diners.svg',
  ];
return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__col">
          {/* Logo above disclaimer */}
          <img
            src={logo}
            alt="BookPremiumFare Logo"
            className="site-footer__logo"
          />

          <h6 className="site-footer__title">Disclaimer</h6>
          {/* padded disclaimer text */}
          <p className="site-footer__text">{disclaimer}</p>
        </div>

        <div className="site-footer__col">
          <h6 className="site-footer__title">Quick Links</h6>
          <ul className="site-footer__list">
            {quickLinks.map(link => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h6 className="site-footer__title">Airlines</h6>
          <ul className="site-footer__list">
            {airlines.map(name => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h6 className="site-footer__title">Destination</h6>
          <ul className="site-footer__list">
            {destinations.map(name => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__payments">
          {payments.map(src => (
            <img key={src} src={src} alt="" />
          ))}
        </div>
        <div className="site-footer__copy">
          © 2025 BookPremiumFare.com — All Rights Reserved
        </div>
      </div>
    </footer>
  );
}