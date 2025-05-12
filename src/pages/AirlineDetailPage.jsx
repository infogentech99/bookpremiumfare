import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import CallCenterSection from '../components/CallCenterSection';
import { AIRLINE_CONTENT } from '../data/airlinesContent';
import '../style/AirlineDetailPage.css';

export default function AirlineDetailPage() {
  const { slug } = useParams();
  const content = AIRLINE_CONTENT[slug];
  const [openFaq, setOpenFaq] = useState({});

  if (!content) {
    return (
      <div className="not-found">
        <Header />
        <main className="not-found__content">
          <p>Airline not found.</p>
        </main>
        <Footer />
      </div>
    );
  }

  const bannerUrl = content.meta.banner || '/banner/baner.png';

  const toggleFaq = (i) =>
    setOpenFaq((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <div className="airline-detail-page">
      <Header />

      {/* Hero Banner */}
      <section
        className="airline-banner"
        style={{ backgroundImage: `url(${bannerUrl})` }}
      >
        <div className="airline-banner__overlay" />
        <div className="airline-banner__content">
          <h1 className="airline-banner__title">
            {content.meta.title}
          </h1>
        </div>
      </section>

      {/* Call-Center */}
      <CallCenterSection />

      {/* Content Card */}
      <main className="airline-content-container">
        <div className="airline-content-wrapper">
          {/* Intro */}
          <p className="airline-intro">{content.intro}</p>

        {content.sections.map((sec, idx) => (
  <section key={idx} className="airline-section">
    <h2 className="section-heading">{sec.heading}</h2>

    {/* Render one or more paragraphs */}
    {sec.body && (
      Array.isArray(sec.body)
        ? sec.body.map((paragraph, i) => (
            <p className="section-body" key={i}>
              {paragraph}
            </p>
          ))
        : <p className="section-body">{sec.body}</p>
    )}

    {/* If you have list‐type sections, render these too */}
    {Array.isArray(sec.items) && sec.items.length > 0 && (
      <ol className="section-list">
        {sec.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    )}
  </section>
))}


          {/* FAQ */}
          <section className="faq-section">
            <h2 className="section-heading">FAQ</h2>
            <div className="faq-list">
              {content.faq.map(({ q, a }, i) => (
                <div key={i} className="faq-item">
                  <div
                    className="faq-question"
                    onClick={() => toggleFaq(i)}
                  >
                    <span>Q: {q}</span>
                    <span className="faq-icon">
                      {openFaq[i] ? <FaMinus /> : <FaPlus />}
                    </span>
                  </div>
                  {openFaq[i] && (
                    <p className="faq-answer">{a}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
