import React from 'react';
import { CheckCircle, X } from 'lucide-react';

function Modal({
  showModal,
  setShowModal,
  modalType,
  selectedPackage,
  packages,
  completePurchase,
  selectedDate,
  selectedTime
}) {
  if (!showModal) return null;

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {modalType === 'purchase' && selectedPackage && (
          <>
            <div className="modal-header">
              <h3 className="modal-title">Purchase Package</h3>
              <button onClick={() => setShowModal(false)} className="modal-close">
                <X size={24} />
              </button>
            </div>
            <div className="modal-summary">
              <h4 className="modal-summary-title">{packages[selectedPackage].credits} Session Package</h4>
              <p className="modal-summary-item"><strong>Price:</strong> ${packages[selectedPackage].price}</p>
              <p className="modal-summary-item"><strong>Per Session:</strong> ${packages[selectedPackage].perSession}</p>
              <p className="modal-summary-savings"><strong>You Save:</strong> ${packages[selectedPackage].savings}</p>
            </div>
            <div className="modal-payment">
              <h4 className="modal-payment-title">Payment Information</h4>
              <input type="text" placeholder="Card Number" className="modal-input" />
              <div className="modal-input-row">
                <input type="text" placeholder="MM/YY" className="modal-input" />
                <input type="text" placeholder="CVV" className="modal-input" />
              </div>
              <input type="text" placeholder="Name on Card" className="modal-input" />
            </div>
            <button onClick={completePurchase} className="modal-button">
              Complete Purchase - ${packages[selectedPackage].price}
            </button>
          </>
        )}

        {modalType === 'confirmation' && (
          <div className="modal-confirmation">
            <CheckCircle className="modal-icon" size={64} />
            <h3 className="modal-confirmation-title">Success!</h3>
            <p className="modal-confirmation-text">
              Package purchased! {packages[selectedPackage]?.credits} credits added to your account.
            </p>
          </div>
        )}

        {modalType === 'booking-confirmation' && (
          <div className="modal-confirmation">
            <CheckCircle className="modal-icon" size={64} />
            <h3 className="modal-confirmation-title">Booking Confirmed!</h3>
            <p className="modal-confirmation-text">
              Your session is booked for {formatDate(selectedDate)} at {selectedTime}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;