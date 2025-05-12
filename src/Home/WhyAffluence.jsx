// src/components/WhyAffluence.jsx
import React from 'react';
import '../style/WhyAffluence.css';

const features = [
  {
    title: 'Easy Airline Reservation',
    desc: [
      `We, at BookPremiumFare, are committed to extending to you the best premium ticket for your journey. Whether you are going away for a weekend or having a beautiful vacation, we duly assure a seamless, stress-free, and premium online booking experience.`,
      
      `We still have a narrow definition of “premium” ticket booking online—and frankly, it can get complicated. That’s why BookPremiumFare has simplified everything for you: whether you want to fly on one airline or fifty, on one route or a hundred, our platform gives you live access to the best prices 24/7.`,

      `Premium is what we deliver. Travel comfortably without burning a hole in your pocket! Our easy-to-use platform puts every bit of information at your fingertips—so you can book in confidence.`
    ]
  },
  // …other features
];

export default function WhyAffluence() {
  return (
    <section className="why">
      <div className="why__container">
        <h2 className="why__title">Why Choose Book Premium Fare?</h2>

        <div className="why__inner">
          {/* Left: Features list */}
          <div className="why__features">
            {features.map(({ title, desc }) => (
              <div className="feature" key={title}>
                <h3 className="feature__title">{title}</h3>
                {desc.map((paragraph, i) => (
                  <p className="feature__desc" key={i}>
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Right: Promo graphic */}
          <div className="why__promo">
            <img
              src="/image/why.webp"
              alt="Promo graphic"
              className="promo__graphic"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
