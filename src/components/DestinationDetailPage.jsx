import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import { DESTINATION_DETAILS } from '../data/destinationDetails';
import '../style/DestinationDetailPage.css';

export default function DestinationDetailPage() {
  const { slug } = useParams();
  const detail = DESTINATION_DETAILS[slug] || DESTINATION_DETAILS['atlanta'];

  // FAQ open state
  const [openFaq, setOpenFaq] = useState({});
  const toggleFaq = (i) => setOpenFaq(prev => ({ ...prev, [i]: !prev[i] }));

  return (
    <div className="destination-detail-page">
   

      <Header />

      {/* Hero + Breadcrumb */}
      <section className="ddp-hero">
        <div className="container">
          <nav className="ddp-breadcrumb">
            <Link to="/">Home</Link><span>/</span>
            <Link to="/destinations">Destinations</Link><span>/</span>
            <span>{detail.heroTitle}</span>
          </nav>
          <h1 className="ddp-hero__title">{detail.heroTitle}</h1>
          <p    className="ddp-hero__sub">{detail.heroSub}</p>
        </div>
      </section>

      {/* Content Sections */}
      <main className="container ddp-content">
        {detail.sections.map((sec, i) => (
          <section className="ddp-section" key={i}>
            <h2 className="ddp-section__heading">{sec.heading}</h2>

            {sec.body && (
              Array.isArray(sec.body)
                ? sec.body.map((p, idx) => (
                    <p className="ddp-section__body" key={idx}>{p}</p>
                  ))
                : <p className="ddp-section__body">{sec.body}</p>
            )}

            {sec.items && (
              <ol className="ddp-section__list">
                {sec.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ol>
            )}

            {sec.note && (
              <p className="ddp-section__note">{sec.note}</p>
            )}
          </section>
        ))}

        {/* FAQ Accordion */}
        <section className="faq-section">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <div className="faq-list">
            {detail.faq.map((f, j) => (
              <div key={j} className={`faq-item ${openFaq[j] ? 'open' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq(j)}>
                  <span>Q: {f.q}</span>
                  <span className="faq-icon">
                    {openFaq[j] ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                {openFaq[j] && (
                  <p className="faq-answer">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
