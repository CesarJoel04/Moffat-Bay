import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/commonStyles.css";
import "../styles/reservationDetails.css";

function ReservationLookupPage() {
  const [customerEmail, setCustomerEmail] = useState("");
  const [reservationId, setReservationId] = useState("");
  const [reservationDetails, setReservationDetails] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await axios.post("http://localhost:3001/reservations",{
      customerEmail: customerEmail,
      reservationId:reservationId
    });
    
      setReservationDetails(response.data.map(reservation => ({
        ...reservation,
        TotalPrice: `$${reservation.TotalPrice.toFixed(2)}`
      }))); // Format TotalPrice here
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
            <label className="label">Customer Email</label>
            <input
              type="text"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              className="input"
            />
          </div>
          <div className="form-group">
            <label className="label">Reservation ID</label>
            <input
              type="text"
              value={reservationId}
              onChange={(e) => setReservationId(e.target.value)}
              className="input"
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
      <div className="containerTable">
        <h2>Reservation Details</h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Check-in Date</th>
              <th>Check-out Date</th>
              <th>Booking Date</th>
              <th>Room Size</th>
              <th>No. of Guests</th>
              <th>Number of Days</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {reservationDetails && Array.isArray(reservationDetails) && (
              reservationDetails.map((reservation, index) => (
                <tr key={index}>
                  <td>{reservation.FirstName}</td>
                  <td>{reservation.LastName}</td>
                  <td>{reservation.checkinDate}</td>
                  <td>{reservation.checkOutDate}</td>
                  <td>{reservation.bookingDate}</td>
                  <td>{reservation.RoomSize}</td>
                  <td>{reservation.NoOfGuests}</td>
                  <td>{reservation.NumberOfDays}</td>
                  <td>{reservation.TotalPrice}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReservationLookupPage;
