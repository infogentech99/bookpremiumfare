// src/pages/RefundPolicyPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import '../style/RefundPolicyPage.css';

export default function RefundPolicyPage() {
  const sections = [
    {
      id: 'general-info',
      title: '1. General Refund Information',
      content: `Refunds for flight bookings are subject to the fare rules and policies of the airline or service provider associated with your ticket. BookPremiumFare.com acts as an intermediary and processes refunds in accordance with these policies.
- Refund eligibility, amounts, and timelines depend on the ticket type (e.g., refundable or non-refundable) and the airline's terms.
- Additional fees, such as taxes, airport charges, or service fees, may or may not be refundable, depending on the airline's policy.`,
    },
    {
      id: 'refundable-tickets',
      title: '2. Refundable Tickets',
      content: `If you have purchased a refundable ticket, you may be eligible for a full or partial refund, subject to the airline's fare rules.
- Request Process: Submit a refund request through your BookPremiumFare.com account or by contacting our customer support team.
- Processing Time: Refunds are typically processed within 7-21 business days after approval by the airline, depending on the payment method and airline policies.
- Service Fees: BookPremiumFare.com may charge a non-refundable service fee for processing refund requests, as outlined at the time of booking.`,
    },
    {
      id: 'non-refundable-tickets',
      title: '3. Non-Refundable Tickets',
      content: `Non-refundable tickets are generally not eligible for refunds unless specified by the airline (e.g., in cases of flight cancellations or significant schedule changes).
- In some cases, you may receive a credit or voucher for future travel, subject to the airline's terms.
- Taxes or certain fees may be refundable, even for non-refundable tickets, depending on the airline's policy.`,
    },
    {
      id: 'cancellations',
      title: '4. Cancellations by Airlines or BookPremiumFare.com',
      content: `If a flight is canceled by the airline or BookPremiumFare.com, you may be eligible for a full refund or alternative arrangements, such as rebooking or travel credits, as per the airline's policy.
- We will notify you of any cancellations and provide instructions for requesting a refund or alternative options.
- Refunds for airline-initiated cancellations are processed in accordance with the airline's terms and may take 7-21 business days.`,
    },
    {
      id: 'no-show',
      title: '5. No-Show Policy',
      content: `If you fail to check in or board your flight without notifying us or the airline in advance (a "no-show"), your ticket may be non-refundable, and no credits or refunds will be issued, unless otherwise specified by the airline.`,
    },
    {
      id: 'how-to-request',
      title: '6. How to Request a Refund',
      content: `To request a refund, please follow these steps:
- Log in to your BookPremiumFare.com account and navigate to the "My Bookings" section, or contact our customer support team.
- Provide your booking reference number and details of the refund request.
- Our team will review your request and inform you of the airline's refund eligibility and any applicable fees.

Please note that refund requests must be submitted within the time frame specified by the airline's fare rules.`,
    },
    {
      id: 'processing',
      title: '7. Refund Processing',
      content: `Approved refunds will be issued to the original payment method used for the booking, unless otherwise agreed.
- Credit card refunds may take 1-2 billing cycles to appear on your statement, depending on your bank.
- BookPremiumFare.com is not responsible for delays in refund processing caused by airlines or payment processors.`,
    },
    {
      id: 'changes',
      title: '8. Changes to This Refund Policy',
      content: `We reserve the right to modify this Refund Policy at any time without prior notice. The updated policy will be effective upon posting on our website. It is your responsibility to review this policy periodically.`,
    },
  ];

  return (
    <div className="refund-page">
      <Header />

      {/* Hero / Breadcrumb */}
      <section className="refund-page__hero">
        <div className="container">
          <h1 className="refund-page__title">Refund Policy</h1>
          <nav className="refund-page__breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Refund Policy</span>
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="refund-page__content">
        <div className="container">
          <p className="refund-page__intro">
            Thank you for choosing BookPremiumFare.com! This Refund Policy outlines the conditions under which refunds or cancellations may be processed for bookings made through our website. As an airline service agency, we strive to provide clear and fair refund procedures. Please read this policy carefully before making a booking.
          </p>

          {sections.map(({ id, title, content }) => (
            <article className="refund-section" key={id} id={id}>
              <h2 className="refund-section__title">{title}</h2>
              <p className="refund-section__text">
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
