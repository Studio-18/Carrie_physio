import React from 'react';

function BookingPage({
  userCredits,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  bookingStep,
  setBookingStep,
  useCredits,
  setUseCredits,
  completeBooking,
  singleSessionPrice
}) {
  const timeSlots = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', 
                     '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM'];

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="page-container">
      <h2 className="page-title">Book Your Session</h2>

      {userCredits > 0 && (
        <div className="credits-alert">
          <p className="credits-alert-title">
            🎉 You Have {userCredits} Session Credit{userCredits !== 1 ? 's' : ''} Available!
          </p>
          <p className="credits-alert-text">
            You can use a credit instead of paying ${singleSessionPrice} for this booking.
          </p>
        </div>
      )}

      {bookingStep === 'calendar' && (
        <div className="booking-card">
          <h3 className="card-title">Select a Date</h3>
          <div className="date-grid">
            {generateDates().map((date, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedDate(date);
                  setBookingStep('time');
                }}
                className="date-button"
              >
                {formatDate(date)}
              </button>
            ))}
          </div>
        </div>
      )}

      {bookingStep === 'time' && (
        <div className="booking-card">
          <button onClick={() => setBookingStep('calendar')} className="back-button">
            ← Back
          </button>
          <h3 className="card-title">Select a Time</h3>
          <p className="card-subtitle">Date: {formatDate(selectedDate)}</p>
          <div className="time-grid">
            {timeSlots.map((time, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedTime(time);
                  setBookingStep('payment');
                }}
                className="time-button"
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {bookingStep === 'payment' && (
        <div className="booking-card">
          <button onClick={() => setBookingStep('time')} className="back-button">
            ← Back
          </button>
          <h3 className="card-title">Confirm & Pay</h3>

          <div className={`summary-box ${useCredits && userCredits > 0 ? 'summary-box-credit' : ''}`}>
            <h4 className="summary-title">Booking Summary</h4>
            <p className="summary-item"><strong>Date:</strong> {formatDate(selectedDate)}</p>
            <p className="summary-item"><strong>Time:</strong> {selectedTime}</p>
            <p className="summary-item"><strong>Duration:</strong> 30 minutes</p>
            <div className="summary-total">
              {useCredits && userCredits > 0 ? (
                <div>
                  <p className="total-credit">✅ Using 1 Credit</p>
                  <p className="total-subtitle">No payment required - already paid in package</p>
                  <p className="total-remaining">
                    Remaining after this booking: {userCredits - 1} credit{userCredits - 1 !== 1 ? 's' : ''}
                  </p>
                </div>
              ) : (
                <div>
                  <p className="total-price">
                    <strong>Total:</strong> ${singleSessionPrice}
                  </p>
                  <p className="total-subtitle">Payment required today</p>
                </div>
              )}
            </div>
          </div>

          {userCredits > 0 && (
            <div className="credit-option">
              <label className="credit-label">
                <input
                  type="checkbox"
                  checked={useCredits}
                  onChange={(e) => setUseCredits(e.target.checked)}
                  className="credit-checkbox"
                />
                <div className="credit-content">
                  <div className="credit-header">
                    <span className="credit-title">💳 Use My Package Credit</span>
                    <span className="credit-badge">SAVE ${singleSessionPrice}</span>
                  </div>
                  <p className="credit-text">
                    You have <strong>{userCredits}</strong> credit{userCredits !== 1 ? 's' : ''} available.
                  </p>
                  <p className="credit-subtext">
                    Check this box to use 1 credit instead of paying ${singleSessionPrice}. Credits never expire!
                  </p>
                </div>
              </label>
            </div>
          )}

          {!useCredits && (
            <div className="payment-form">
              <h4 className="form-title">Payment Information</h4>
              <input type="text" placeholder="Card Number" className="form-input" />
              <div className="form-row">
                <input type="text" placeholder="MM/YY" className="form-input" />
                <input type="text" placeholder="CVV" className="form-input" />
              </div>
              <input type="text" placeholder="Name on Card" className="form-input" />
            </div>
          )}

          <button onClick={completeBooking} className="confirm-button">
            {useCredits && userCredits > 0 ? 'Confirm Booking (Use Credit)' : `Confirm & Pay $${singleSessionPrice}`}
          </button>
        </div>
      )}
    </div>
  );
}

export default BookingPage;