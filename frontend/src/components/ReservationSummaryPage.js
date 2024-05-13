// ReservationSummaryPage.js
import React from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/commonStyles.css";
import "../styles/reservationSummary.css";

function ReservationSummaryPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { reservation } = state;

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3001/submit-reservation", {
        reservation_id: reservation.reservationId,
      });
      alert("Reservation submitted!");
      navigate("/");
    } catch (error) {
      alert("Failed to submit reservation:", error.response.data);
    }
  };

  const handleCancel = async () => {
    try {
      await axios.delete("http://localhost:3001/cancel-reservation", {
        data: { reservation_id: reservation.reservationId },
      });
      alert("Reservation canceled!");
      navigate("/reservation");
    } catch (error) {
      alert("Failed to cancel reservation:", error.response.data);
    }
  };

  return (
    <div className="container">
      <div className="form-header">
      <h1>Reservation Summary</h1>
      </div>
      <div className="form-row">
          <div className="form-group">
            <label className="reservationLabel">Room Size:</label>
            <label className="reservationData">{reservation.roomSize}</label>
          </div>
          <div className="form-group">
            <label className="reservationLabel">Number of Guests:</label>
            <label className="reservationData">{reservation.number_of_guests}</label>
          </div>
      </div>
      <div className="form-row">
          <div className="form-group">
            <label className="reservationLabel">Check-In Date:</label>
            <label className="reservationData">{reservation.check_in_date}</label>
          </div>
          <div className="form-group">
            <label className="reservationLabel">Check-Out Date:</label>
            <label className="reservationData">{reservation.check_out_date}</label>
          </div>
      </div>
      <div className="button-row">
          <button className="button" onClick={handleSubmit}>Submit Reservation</button>
          <button className="button" onClick={handleCancel}>Cancel Reservation</button>
      </div>
    </div>
  );
}

export default ReservationSummaryPage;
