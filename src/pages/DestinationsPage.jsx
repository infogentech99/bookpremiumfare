import React from 'react';
import Header          from '../Home/Header';
import Footer          from '../Home/Footer';
import DestinationList from '../components/DestinationList';
import '../style/DestinationsPage.css';

export default function DestinationsPage() {
  return (
    <div className="destinations-page">
      <Header />
      <main className="destinations-page__main">
        <h1 className="destinations-page__title">Our Destinations</h1>
        <DestinationList />
      </main>
      <Footer />
    </div>
  );
}
