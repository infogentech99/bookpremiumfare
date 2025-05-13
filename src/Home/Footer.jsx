import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css';
import logo from '../../public/image/whitelogo.png';

export default function Footer() {
  const disclaimer =
    'BookPremiumFare.com acts solely as a booking platform and is not responsible for airline policies, delays, or cancellations. All bookings are subject to airline terms and conditions.';

  // scroll to top on link click
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__col">
        <Link to='/'>  
          <img
            src={logo}
            alt="BookPremiumFare Logo"
            className="site-footer__logo"
          /></Link>

          <h6 className="site-footer__title">Disclaimer</h6>
          <p className="site-footer__text">{disclaimer}</p>
        </div>

        <div className="site-footer__col">
          <h6 className="site-footer__title">Quick Links</h6>
          <ul className="site-footer__list">
            <li>
              <Link to="/privacy-policy" onClick={handleLinkClick}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" onClick={handleLinkClick}>
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link to="/refund" onClick={handleLinkClick}>
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h6 className="site-footer__title">Airlines</h6>
          <ul className="site-footer__list">
            <li>Asiana Airlines</li>
            <li>Air Canada</li>
            <li>Alaska Airlines</li>
            <li>Lufthansa</li>
            <li>Qatar Airways</li>
            <li>United Airlines</li>
            <li>Turkish Airlines</li>
            <li>Southwest Airlines</li>
            <li>Saudia</li>
            <li>Singapore Airlines</li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h6 className="site-footer__title">Destinations</h6>
          <ul className="site-footer__list">
            <li>Hawaii</li>
            <li>Atlanta</li>
            <li>New York</li>
            <li>Las Vegas</li>
            <li>Miami</li>
            <li>Los Angeles</li>
            <li>Orlando</li>
            <li>San Francisco</li>
            <li>New Orleans</li>
            <li>Boston</li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__payments">
          <img src="/payment/mastercard.jfif" alt="Mastercard" />
          <img src="/payment/visa.jfif" alt="Visa" />
          <img src="/payment/amex.png" alt="American Express" />
          <img src="/payment/discover.jfif" alt="Discover" />
          <img src="/payment/diners.png" alt="Diners Club" />
        </div>
        <div className="site-footer__copy">
          © 2025 BookPremiumFare.com — All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
