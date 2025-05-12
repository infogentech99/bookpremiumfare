import React from 'react';
import '../style/CallCenterSection.css';

const FEATURES = [
  {
    icon: '/icons/reservation.webp',
    title: 'Easy Airline Reservation',
    desc: 'Book with more than 450 airlines on call and get up to $450 off'
  },
  {
    icon: '/icons/support.webp',
    title: 'Customer Support',
    desc: 'Customer support is 24×7 available and will take care of all your travel needs.'
  },
  {
    icon: '/icons/payment.webp',
    title: 'Flexible Payment',
    desc: 'With more than 10 payment options, your payments are easier and secure'
  },
  {
    icon: '/icons/cancellation.webp',
    title: 'Free Cancellation',
    desc: 'Book now and make free cancellation within 24 hours of booking the flights.'
  },
];

export default function CallCenterSection() {
  return (
    <section className="cc-section">
      <div className="cc-container">
        <h2 className="cc-title">Why To Book With Call Center</h2>
        <p className="cc-subtitle">These popular destinations have a lot to offer</p>

        <div className="cc-grid">
          {FEATURES.map(({ icon, title, desc }) => (
            <div className="cc-item" key={title}>
              <div className="cc-icon-wrap">
                <img src={icon} alt={title} className="cc-icon" />
              </div>
              <h3 className="cc-item-title">{title}</h3>
              <p className="cc-item-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
