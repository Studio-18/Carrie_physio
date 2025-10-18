import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import BookingPage from './components/BookingPage';
import PackagesPage from './components/PackagesPage';
import TermsPage from './components/TermsPage';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [userCredits, setUserCredits] = useState(5);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookingStep, setBookingStep] = useState('calendar');
  const [useCredits, setUseCredits] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(null);

  const singleSessionPrice = 85;
  const packages = {
    5: { credits: 5, price: 400, perSession: 80, savings: 25 },
    10: { credits: 10, price: 750, perSession: 75, savings: 100 }
  };

  const handlePurchasePackage = (pkgNum) => {
    setSelectedPackage(pkgNum);
    setModalType('purchase');
    setShowModal(true);
  };

  const completePurchase = () => {
    const pkg = packages[selectedPackage];
    setUserCredits(userCredits + pkg.credits);
    setShowModal(false);
    setModalType('confirmation');
    setShowModal(true);
    setTimeout(() => setShowModal(false), 3000);
  };

  const completeBooking = () => {
    if (useCredits && userCredits > 0) {
      setUserCredits(userCredits - 1);
    }
    setModalType('booking-confirmation');
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      setCurrentPage('home');
      setBookingStep('calendar');
      setSelectedDate(null);
      setSelectedTime(null);
      setUseCredits(false);
    }, 3000);
  };

  const appState = {
    currentPage,
    setCurrentPage,
    userCredits,
    setUserCredits,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    bookingStep,
    setBookingStep,
    useCredits,
    setUseCredits,
    showModal,
    setShowModal,
    modalType,
    setModalType,
    selectedPackage,
    setSelectedPackage,
    singleSessionPrice,
    packages,
    handlePurchasePackage,
    completePurchase,
    completeBooking
  };

  return (
    <div className="app">
      <Navigation {...appState} />
      
      {currentPage === 'home' && <HomePage {...appState} />}
      {currentPage === 'profile' && <ProfilePage />}
      {currentPage === 'booking' && <BookingPage {...appState} />}
      {currentPage === 'packages' && <PackagesPage {...appState} />}
      {currentPage === 'terms' && <TermsPage />}

      {showModal && <Modal {...appState} />}

      <footer className="footer">
        <div className="footer-content">
          <p>Carrie Haber Physiotherapy</p>
          <p className="footer-sub">Professional physiotherapy services</p>
          <p className="footer-copy">© 2025 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;