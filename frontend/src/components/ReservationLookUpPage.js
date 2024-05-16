// ReservationLookUpPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/commonStyles.css";

function ReservationLookupPage() {
  const [customerId, setCustomerId] = useState("");
  const [reservationId, setReservationId] = useState("");
  const [reservationDetails, setReservationDetails] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3001/reservations/${customerId}/${reservationId}`);
      setReservationDetails(response.data); // Store the reservation data in state
    } catch (error) {
      alert("Failed to retrieve reservation: Please try again");
    }
  };

  return (
    <div className="container">
      <div className="form-header">
        <h2>Lookup Reservation</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label className="label">Customer ID</label>
            <input
              type="text"
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
              className="input"
              required
            />
          </div>
          <div className="form-group">
            <label className="label">Reservation ID</label>
            <input
              type="text"
              value={reservationId}
              onChange={(e) => setReservationId(e.target.value)}
              className="input"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <button type="submit" className="button">
              Find Reservation
            </button>
          </div>
        </div>
      </form>
      {reservationDetails && (
        <div className="reservation-details">
          <h3>Reservation Summary</h3>
          <p><strong>Room Size:</strong> {reservationDetails.roomSize}</p>
          <p><strong>Number of Guests:</strong> {reservationDetails.numberOfGuests}</p>
          <p><strong>Check-In:</strong> {reservationDetails.checkIn}</p>
          <p><strong>Check-Out:</strong> {reservationDetails.checkOut}</p>
        </div>
      )}
    </div>
  );
}

export default ReservationLookupPage;
