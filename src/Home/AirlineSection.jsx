import React from 'react';
import '../style/BlogSection.css';

const BLOGS = [
  {
    id: 1,
    previewImg: '/airline/Atlanta.webp',
    thumbImg:   '/airline/Atlanta.webp',
    title:      'How to Book a British Airlines Ticket?',
    link:       '/airlines/how-to-book-british-airlines-flight-ticket',
  },
  {
    id: 2,
    previewImg: '/airline/Chicago.webp',
    thumbImg:   '/airline/Chicago.webp',
    title:      'What to Know Before Flying with Delta Airlines',
    link:       '/airlines/why-fly-with-singapore-airlines',
  },
  {
    id: 3,
    previewImg: '/airline/Boston.webp',
    thumbImg:   '/airline/Boston.webp',
    title:      'Emirates Fare Classes Explained: Special, Saver, Flex',
    link:       '/airlines/emirates-fare-classes',
  },
];

export default function AirlineSection() {
  return (
    <section className="blog-section">
      <div className="blog-section__container">
        <h2 className="blog-section__title">Our Airlines</h2>

        <div className="blog-grid">
          {BLOGS.map(({ id, previewImg, thumbImg, title, link }) => (
            <article className="blog-card" key={id}>
              <div className="blog-card__preview">
                <img
                  src={previewImg}
                  alt={title}
                  className="blog-card__preview-img"
                />
                <a href={link} className="blog-card__overlay">
                  Read more
                </a>
              </div>

              <div className="blog-card__thumb">
                <img src={thumbImg} alt="" className="blog-card__thumb-img" />
              </div>

              <div className="blog-card__body">
                <h3 className="blog-card__heading">{title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-section__more">
          <a href="/airlines" className="blog-section__more-link">
            View more airlines →
          </a>
        </div>
      </div>
    </section>
  );
}
