import React from 'react';
import { Link } from 'react-router-dom';
import { DESTINATIONS } from '../data/destinations';
import '../style/DestinationList.css';

export default function DestinationList() {
  return (
    <div className="dest-list__grid">
      {DESTINATIONS.map(({ name, slug }) => (
        <Link
          key={slug}
          to={`/destinations/${slug}`}
          className="dest-card"
        >
          <span className="dest-card__name">{name}</span>
        </Link>
      ))}
    </div>
  );
}
