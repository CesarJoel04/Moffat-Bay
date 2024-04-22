// ReservationSummaryPage.js
import React from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

function ReservationSummaryPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { reservation } = state;

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3001/submit-reservation', {
        reservation_id: reservation.reservationId
      });
      alert('Reservation submitted!');
      navigate('/');
    } catch (error) {
      alert('Failed to submit reservation:', error.response.data);
    }
  };

  const handleCancel = async () => {
    try {
      await axios.delete('http://localhost:3001/cancel-reservation', {
        data: { reservation_id: reservation.reservationId }
      });
      alert('Reservation canceled!');
      navigate('/reservation');
    } catch (error) {
      alert('Failed to cancel reservation:', error.response.data);
    }

    
  };

  return (
    <div className="reservation-summary">
      <h1>Reservation Summary</h1>
      <p><strong>Room Size:</strong> {reservation.roomSize}</p>
      <p><strong>Number of Guests:</strong> {reservation.number_of_guests}</p>
      <p><strong>Check-In Date:</strong> {reservation.check_in_date}</p>
      <p><strong>Check-Out Date:</strong> {reservation.check_out_date}</p>
      <button onClick={handleSubmit}>Submit Reservation</button>
      <button onClick={handleCancel}>Cancel Reservation</button>
    </div>
  );
}

export default ReservationSummaryPage;
