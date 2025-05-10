import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import '../style/Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
         {/* Mobile toggle */}
        <button
          className="header__toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>
        {/* Logo */}
        <Link to="/" className="header__logo">
          <img src="/image/logo.png" alt="Book Premium Fare" />
        </Link>

        {/* Desktop nav */}
        <nav className="header__nav-desktop">
          <ul className="nav__list">
            <li><Link to="/airlines">Airlines</Link></li>
            <li><Link to="/destination">Destination</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Contact block */}
        <div className="header__contact">
          <FaPhoneAlt />
          <div>
            <small>Call us now</small>
            <a href="tel:+18888291141">+1-888-829-1141</a>
          </div>
        </div>

       
      </div>

      {/* Mobile overlay menu */}
      <div className={`header__overlay ${menuOpen ? 'open' : ''}`}>
        <button
          className="header__close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <FaTimes />
        </button>

        <ul className="overlay__list">
          <li><Link to="/airlines" onClick={() => setMenuOpen(false)}>Airlines</Link></li>
          <li><Link to="/destination" onClick={() => setMenuOpen(false)}>Destination</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
        </ul>

        <div className="overlay__contact">
          <FaPhoneAlt />
          <div>
            <small>Call us now</small>
            <a href="tel:+18888291141">+1-888-829-1141</a>
          </div>
        </div>
      </div>
    </header>
  );
}
