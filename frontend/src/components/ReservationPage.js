// ReservationPage.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ReservationPage() {
  const [roomSize, setRoomSize] = useState("");
  const [guests, setGuests] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const navigate = useNavigate();
  console.log("Here1");
  const handleSubmit = async (e) => {
    console.log("Here2");
    e.preventDefault();
    console.log("Here3");

    if (!roomSize || !guests || !checkInDate || !checkOutDate) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/reserve", {
        room_id: roomSize,
        customer_id: 1,
        number_of_guests: guests,
        check_in_date: checkInDate,
        check_out_date: checkOutDate,
      });
      // Navigate to the summary page with the reservation details
      navigate("/reservation-summary", {
        state: {
          reservation: {
            reservationId: response.data.reservationId,
            roomSize: roomSize,
            number_of_guests: guests,
            check_in_date: checkInDate,
            check_out_date: checkOutDate,
          },
        },
      });
    } catch (error) {
      alert(
        "Reservation failed:",
        error.response && error.response.data
          ? error.response.data
          : "Unknown error",
      );
    }
  };

  return (
    <div className="container">
      <div className="form-header">
        <h2>Reservation:</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label className="label">Check-In Date:</label>
            <input
              className="input"
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="label">Check-Out Date:</label>
            <input
              className="input"
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="label">Room Type</label>
            <select
              className="input"
              value={roomSize}
              onChange={(e) => setRoomSize(e.target.value)}
            >
              <option value="1">Double Full Beds</option>
              <option value="2">Queen</option>
              <option value="3">Double Queen Beds</option>
              <option value="4">King</option>
            </select>
          </div>
          <div className="form-group">
            <label className="label">Number of Guests:</label>
            <input
              className="input"
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1"
              max="5"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <button type="submit" className="button">
              Book Your Vacation
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReservationPage;
