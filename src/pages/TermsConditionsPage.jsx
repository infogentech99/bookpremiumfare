// src/pages/TermsConditionsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import '../style/TermsConditionsPage.css';

export default function TermsConditionsPage() {
  const sections = [
    {
      id: 'general-terms',
      title: '1. General Terms',
      content: `BookPremiumFare.com provides travel-related services, including flight bookings, itinerary planning, and customer support for air travel. All services are subject to availability and may be modified or discontinued at our discretion.
- You must be at least 18 years old to use our services.
- You agree to provide accurate and complete information when making bookings or inquiries.
- We reserve the right to refuse service to anyone for any reason at any time.`,
    },
    {
      id: 'booking-payment',
      title: '2. Booking and Payment',
      content: `All bookings made through BookPremiumFare.com are subject to the terms and conditions of the respective airlines and service providers.
- Fares and Charges: Prices are subject to change until the booking is confirmed. Additional fees, such as taxes, service fees, or baggage charges, may apply.
- Payment: Payments must be made in full at the time of booking unless otherwise specified. We accept major credit cards and other payment methods as indicated on our website.
- Cancellations and Refunds: Cancellation and refund policies vary by airline and ticket type. Please review the specific fare rules before booking. BookPremiumFare.com may charge a service fee for processing cancellations or changes.`,
    },
    {
      id: 'travel-documents',
      title: '3. Travel Documents and Responsibilities',
      content: `You are responsible for ensuring that you have the necessary travel documents, including passports, visas, and health certifications, as required by the destination country or airline.
- BookPremiumFare.com is not liable for any issues arising from incomplete or incorrect travel documentation.
- You must comply with all airline policies, including check-in requirements and baggage restrictions.`,
    },
    {
      id: 'limitation-liability',
      title: '4. Limitation of Liability',
      content: `BookPremiumFare.com acts as an intermediary between you and the service providers (airlines, etc.). We are not liable for:
- Delays, cancellations, or disruptions caused by airlines or other third parties.
- Loss, damage, or theft of personal belongings during travel.
- Injuries, illnesses, or other incidents that occur during travel.
Our liability is limited to the amount paid for the services provided by BookPremiumFare.com.`,
    },
    {
      id: 'website-usage',
      title: '5. Website Usage',
      content: `By using our website, you agree not to:
- Use the website for any unlawful or unauthorized purpose.
- Attempt to gain unauthorized access to our systems or data.
- Copy, reproduce, or distribute content from our website without prior written permission.`,
    },
    {
      id: 'changes-terms',
      title: '6. Changes to Terms and Conditions',
      content: `We reserve the right to update or modify these Terms and Conditions at any time without prior notice. The updated version will be effective upon posting on our website. It is your responsibility to review these terms periodically.`,
    },
    {
      id: 'governing-law',
      title: '7. Governing Law',
      content: `These Terms and Conditions are governed by and construed in accordance with the laws of [Insert Jurisdiction, e.g., the State of Delaware, USA]. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in [Insert Jurisdiction].`,
    },
  ];

  return (
    <div className="terms-page">
      <Header />

      {/* Hero / Breadcrumb */}
      <section className="terms-page__hero">
        <div className="container">
          <h1 className="terms-page__title">Terms and Conditions</h1>
          <nav className="terms-page__breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Terms and Conditions</span>
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="terms-page__content">
        <div className="container">
          <p className="terms-page__intro">
            Welcome to BookPremiumFare.com! These Terms and Conditions govern your use of our website and services provided by BookPremiumFare.com, an airline service agency. By accessing or using our website, you agree to be bound by these terms. Please read them carefully.
          </p>

          {sections.map(({ id, title, content }) => (
            <article className="terms-section" key={id} id={id}>
              <h2 className="terms-section__title">{title}</h2>
              <p className="terms-section__text">
                {content.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
