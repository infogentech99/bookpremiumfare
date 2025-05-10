import React from 'react';
import '../style/BlogSection.css';

const BLOGS = [
  {
    id: 1,
    previewImg: '/airline/Atlanta.webp',
    thumbImg:   '/airline/Atlanta.webp',
    title:      'What Should You Know About Swiss Air Baggage Policy?',
    link:       '/blog/swiss-air-baggage-policy',
  },
  {
    id: 2,
    previewImg: '/airline/Chicago.webp',
    thumbImg:   '/airline/Chicago.webp',
    title:      'Frequently Asked Questions About SWISS Air Flights',
    link:       '/blog/swiss-air-faq',
  },
  {
    id: 3,
    previewImg: '/airline/Boston.webp',
    thumbImg:   '/airline/Boston.webp',
    title:      'Frequently Asked Questions About Norse Atlantic Airways',
    link:       '/blog/norse-atlantic-faq',
  },
];

export default function BlogSection() {
  return (
    <section className="blog-section">
      <div className="blog-section__container">
        <h2 className="blog-section__title">Our Travel Blog</h2>

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
          <a href="/blog" className="blog-section__more-link">
            View more blogs →
          </a>
        </div>
      </div>
    </section>
  );
}
