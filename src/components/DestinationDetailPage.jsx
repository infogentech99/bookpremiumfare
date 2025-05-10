import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Home/Header';
import Footer from '../Home/Footer';

export default function DestinationDetailPage() {
  const { slug } = useParams();

  return (
    <div className="destination-detail-page">
      <Header />
      <main style={{ maxWidth: 800, margin: '2rem auto', padding: '0 1rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
          {slug.replace(/-/g, ' ').toUpperCase()}
        </h2>
        <p>Your detail content for <strong>{slug}</strong> goes here.</p>
      </main>
      <Footer />
    </div>
  );
}
