import React from 'react';
import { CheckCircleIcon } from './icons';

function PackagesPage({ packages, handlePurchasePackage, setCurrentPage, singleSessionPrice }) {
  return (
    <div className="page-container">
      <h2 className="page-title">Session Packages</h2>
      <p className="page-subtitle">Save money with our packages. Credits never expire!</p>

      <div className="package-grid">
        <div className="package-card">
          <h3 className="package-title">Single Session</h3>
          <div className="package-price">${singleSessionPrice}</div>
          <p className="package-subtitle">Pay as you go</p>
          <ul className="package-features">
            <li className="package-feature">
              <CheckCircleIcon size={20} />
              <span>30-minute session</span>
            </li>
            <li className="package-feature">
              <CheckCircleIcon size={20} />
              <span>Book anytime</span>
            </li>
          </ul>
          <button onClick={() => setCurrentPage('booking')} className="package-button package-button-secondary">
            Book Now
          </button>
        </div>

        <div className="package-card package-card-featured">
          <div className="package-badge">Save $25</div>
          <h3 className="package-title">5 Session Package</h3>
          <div className="package-price">${packages[5].price}</div>
          <div className="package-per-session">($80 per session)</div>
          <p className="package-subtitle">Perfect for short-term goals</p>
          <ul className="package-features">
            <li className="package-feature">
              <CheckCircleIcon size={20} />
              <span>5 session credits</span>
            </li>
            <li className="package-feature">
              <CheckCircleIcon size={20} />
              <span>Credits never expire</span>
            </li>
            <li className="package-feature">
              <CheckCircleIcon size={20} />
              <span>Save $25 total</span>
            </li>
          </ul>
          <button onClick={() => handlePurchasePackage(5)} className="package-button">
            🛒 Purchase Package
          </button>
        </div>

        <div className="package-card package-card-featured">
          <div className="package-badge">Save $100</div>
          <h3 className="package-title">10 Session Package</h3>
          <div className="package-price">${packages[10].price}</div>
          <div className="package-per-session">($75 per session)</div>
          <p className="package-subtitle">Best value!</p>
          <ul className="package-features">
            <li className="package-feature">
              <CheckCircleIcon size={20} />
              <span>10 session credits</span>
            </li>
            <li className="package-feature">
              <CheckCircleIcon size={20} />
              <span>Credits never expire</span>
            </li>
            <li className="package-feature">
              <CheckCircleIcon size={20} />
              <span>Save $100 total</span>
            </li>
          </ul>
          <button onClick={() => handlePurchasePackage(10)} className="package-button">
            🛒 Purchase Package
          </button>
        </div>
      </div>
    </div>
  );
}

export default PackagesPage;
