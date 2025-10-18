import React from 'react';

function Navigation({ currentPage, setCurrentPage, userCredits, singleSessionPrice }) {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <h1 className="nav-title" onClick={() => setCurrentPage('home')}>
          Carrie Haber Physiotherapy
        </h1>
        <div className="nav-links">
          <button onClick={() => setCurrentPage('home')} className="nav-link">Home</button>
          <button onClick={() => setCurrentPage('profile')} className="nav-link">About Carrie</button>
          <button onClick={() => setCurrentPage('booking')} className="nav-link">Book Session</button>
          <button onClick={() => setCurrentPage('packages')} className="nav-link">Packages</button>
          <button onClick={() => setCurrentPage('terms')} className="nav-link">Terms</button>
        </div>
      </div>
      {userCredits > 0 && (
        <div className="credit-banner">
          <span className="credit-text">
            🎫 You Have {userCredits} Session Credit{userCredits !== 1 ? 's' : ''} Available • Worth ${userCredits * singleSessionPrice}!
          </span>
        </div>
      )}
    </nav>
  );
}

export default Navigation;