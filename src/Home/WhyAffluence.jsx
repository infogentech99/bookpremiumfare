import React from 'react';
import '../style/WhyAffluence.css';

export default function WhyAffluence() {
  // Use the public URL paths directly:
  const features = [
    {
      icon: '/icons/reservation.webp',
      title: 'Easy Airline Reservation',
      desc: 'We, at BookPremiumFare, are committed to extending to you the best premium ticket for your journey. Whether you are going away for a weekend or having a beautiful vacation, we duly assure a seamless, stress-free, and premium booking online tickets experience. Our objective is simple: offer you to book premium ticket for flight opportunities so you can travel without pinching your purse.',
    },
    {
      icon: '/icons/support.webp',
      title: 'World Class Customer Support',
      desc: 'At BookPremiumFare.com, we exist to assist travelers in finding the most suitable deals for themselves. Be it premium fare deals or booking the lowest fare flight available, we have it all. Take that first step with us, and let us grant you a hassle-free booking experience. Don not wait anymore! Grab your flight right now with BookPremiumFare.com, pack your bags, and set off to explore the globe easily and conveniently. Relax, for you truly did find the best flight booking deals at the best prices!',
    },
    // {
    //   icon: '/icons/payment.webp',
    //   title: 'Pay The Way You Like',
    //   desc: 'With more than 10 payment options, your payments are easier and secure',
    // },
    // {
    //   icon: '/icons/cancel.webp',
    //   title: '24 Hours Free Cancellation',
    //   desc: 'Book now and make free cancellation within 24 hours of booking the flights.',
    // },
  ];

  return (
    <section className="why">
      <div className="why__container">
        <h2 className="why__title">Why Book Premium Fare?</h2>

        <div className="why__inner">
          {/* Left: Features list */}
          <div className="why__features">
            {features.map((f, idx) => (
              <div className="feature" key={idx}>
                <img src={f.icon} alt={f.title} className="feature__icon" />
                <div className="feature__body">
                  <h3 className="feature__title">{f.title}</h3>
                  <p className="feature__desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Promo card */}
          <div className="why__promo">
            <div className="promo__text">
              <h3 className="promo__headline">UPTO 25% OFF ON</h3>
              <p className="promo__subline">FLIGHTS BOOKED</p>
              <span className="promo__call-label">On-call</span>
              <a href="tel:+18888291141" className="promo__phone">
                +1-888-829-1141
              </a>
            </div>
            {/* public/image/yellowimage.webp */}
            <img
              src="/image/yellowimage.webp"
              alt="Promo graphic"
              className="promo__graphic"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
