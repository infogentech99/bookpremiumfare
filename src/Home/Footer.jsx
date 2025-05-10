import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';
import '../style/Footer.css';

export default function Footer() {
  // replace these with your real URLs/assets
  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Refund Policy', href: '/refund' },
    { label: 'Cookies Policy', href: '/cookies' },
    { label: 'Site Map', href: '/sitemap' },
    { label: 'Advertiser Disclosure', href: '/disclosure' },
  ];

  const topAirlines = [
    'ASIANA AIRLINES',
    'AIR CANADA',
    'ALASKA AIRLINES',
    'LUFTHANSA',
    'QATAR AIRWAYS',
    'UNITED AIRLINES',
    'TURKISH AIRLINES',
    'SOUTHWEST AIRLINES',
    'SAUDI ARABIAN AIRLINES',
    'SINGAPORE AIRLINES',
  ];

  const topDestinations = [
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

  const topLinks = [
    { label: 'Flights', href: '/flights' },
    { label: 'Hotels', href: '/hotels' },
    { label: 'Tours', href: '/tours' },
    { label: 'Car Rental', href: '/cars' },
    { label: 'About', href: '/about' },
    { label: 'Contact us', href: '/contact' },
    { label: 'Blogs', href: '/blog' },
    { label: 'Services', href: '/services' },
    { label: 'Site Map', href: '/sitemap' },
  ];

  const payments = [
    '/images/payments/mastercard.svg',
    '/images/payments/visa.svg',
    '/images/payments/discover.svg',
    '/images/payments/amex.svg',
    '/images/payments/diners.svg',
  ];

  return (
    <footer className="footer">
      {/* Top columns */}
      <div className="footer__top">
        <div className="footer__col">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__list">
            {quickLinks.map((link) => (
              <li key={link.label} className="footer__list-item">
                <a href={link.href} className="footer__link">
                  › {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Top Airlines</h4>
          <ul className="footer__list">
            {topAirlines.map((airline) => (
              <li key={airline} className="footer__list-item">
                › {airline}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Top Destinations</h4>
          <ul className="footer__list">
            {topDestinations.map((dest) => (
              <li key={dest} className="footer__list-item">
                › {dest}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Contact Us</h4>
          <address className="footer__contact">
            <p>1820 Avenue M #491 Brooklyn, NY 11230</p>
            <p>+1-888-829-1141</p>
            <p>
              <a href="mailto:support@bookpremiumfare.com">
                support@bookpremiumfare.com
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Secondary menu */}
      <nav className="footer__secondary">
        <h4 className="footer__secondary-title">Top Links</h4>
        <ul className="footer__secondary-list">
          {topLinks.map((link) => (
            <li key={link.label} className="footer__secondary-item">
              <a href={link.href} className="footer__secondary-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Disclaimer */}
      <p className="footer__disclaimer">
        <strong>Disclaimer – </strong>
      BookPremiumFare.com acts solely as a booking platform and is not responsible for airline policies, delays, or cancellations. All bookings are subject to airline terms and conditions. Customer Service
        Number: +1-888-829-1141 | Email:
        <a href="mailto:support@bookpremiumfare.com">
          support@bookpremiumfare.com
        </a> ©Copyright 2023-2025
        <a href="/">bookpremiumfare.com</a> (Subsidiary of CheapFareMart LLC)
      </p>

      {/* Payments & socials */}
      <div className="footer__bottom-widgets">
        <div className="footer__payments">
          {payments.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              className="footer__payment-logo"
            />
          ))}
        </div>
        <div className="footer__social">
          <span className="footer__social-label">Follow us on:</span>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener"
            className="footer__social-link"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener"
            className="footer__social-link"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener"
            className="footer__social-link"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="footer__bottom">
        <div className="footer__copyright">
          ©2024 Book Premium Fare. Built by Book Premium Fare
        </div>
        <ul className="footer__legal">
          <li><a href="/privacy">Privacy policy</a></li>
          <li><a href="/terms">Terms and conditions</a></li>
          <li><a href="/refund">Refund policy</a></li>
        </ul>
      </div>
    </footer>
  );
}
