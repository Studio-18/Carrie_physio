import React from 'react';
import { UserIcon, ClockIcon, PackageIcon } from './icons';

function HomePage({ setCurrentPage }) {
  return (
    <div className="page-container">
      <div className="hero-section">
        <h2 className="hero-title">Welcome to Carrie Haber Physiotherapy</h2>
        <p className="hero-subtitle">Professional physiotherapy services to help you recover and thrive.</p>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <UserIcon className="feature-icon" size={48} />
          <h3 className="feature-title">Expert Care</h3>
          <p className="feature-text">Over 15 years of experience</p>
        </div>
        <div className="feature-card">
          <ClockIcon className="feature-icon" size={48} />
          <h3 className="feature-title">Flexible Scheduling</h3>
          <p className="feature-text">30-minute convenient sessions</p>
        </div>
        <div className="feature-card">
          <PackageIcon className="feature-icon" size={48} />
          <h3 className="feature-title">Package Deals</h3>
          <p className="feature-text">Save with 5 and 10 session packages</p>
        </div>
      </div>

      <div className="cta-section">
        <button onClick={() => setCurrentPage('booking')} className="cta-button">
          Book Your Session Now
        </button>
      </div>
    </div>
  );
}

export default HomePage;
