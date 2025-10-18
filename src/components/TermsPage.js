import React from 'react';

function TermsPage() {
  return (
    <div className="page-container">
      <div className="terms-card">
        <h2 className="terms-title">Terms & Conditions</h2>

        <section className="terms-section">
          <h3 className="terms-heading">24-Hour Cancellation Policy</h3>
          <p className="terms-text">
            We require 24 hours notice for cancellations. Cancellations with less than 24 hours 
            notice will forfeit the full session fee or credit.
          </p>
        </section>

        <section className="terms-section">
          <h3 className="terms-heading">Sessions</h3>
          <p className="terms-text">
            All sessions are 30 minutes in duration and must be booked through our online system.
          </p>
        </section>

        <section className="terms-section">
          <h3 className="terms-heading">Packages</h3>
          <ul className="terms-list">
            <li>5-session package: $400 ($80 per session, save $25)</li>
            <li>10-session package: $750 ($75 per session, save $100)</li>
            <li>Credits never expire</li>
            <li>Packages are non-refundable</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default TermsPage;