// ReservationPage.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/commonStyles.css";
import "../styles/reservationStyles.css";
import FooterSection from "./LandingPageSections/FooterSection.js";

function ReservationPageBody() {
  const [roomSize, setRoomSize] = useState("");
  const [guests, setGuests] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        <h2>Reservation</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label className="label">Check-In Date:</label>
            <input
              className="date-picker-input"
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="label">Check-Out Date:</label>
            <input
              className="date-picker-input"
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
              className="select"
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
              className="numeric-textbox"
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
      <div className="blank-space"></div>
      <div className="room-reservation-container">
        <div className="header">
          <h2 className="bold-label">Choose Your Perfect Space</h2>
          <p>
            At Moffat Bay Marina & Lodge, our luxurious accommodation offers a
            welcoming retreat after a day on the water. We can provide the
            perfect space for your stay. Wake up to breathtaking sunrises over
            the bay, unwind under a starlit sky, or prepare yourself for a new
            adventure. Our staff is ready to pamper and serve you today! Begin
            your reservation by searching all available rooms with the form
            above, or choose your perfect space from our rooms below.
          </p>
          <div className="blank-space"></div>
        </div>
        <div className="rooms-gallery">
          <div className="rooms-container">
            <img src="./King4.jpeg" alt="Image 1" />
            <div className="room-text-container">
              <div className="left-aligned">
                <p>1-5 Guests</p>
                <h4>King Bed</h4>
              </div>
              <div className="middle-aligned">
                <p>
                  The King Bed room, with additional foldouts available, ensures
                  a regal experience with a luxurious king-size bed.
                </p>
              </div>
            </div>
          </div>
          <div className="rooms-container">
            <img src="./Queen1.jpeg" alt="Image 1" />
            <div className="room-text-container">
              <div className="left-aligned">
                <p>1-5 Guests</p>
                <h4>Queen Bed</h4>
              </div>
              <div className="middle-aligned">
                <p>
                  Our Queen Bed room, with additional foldouts available,
                  provides a cozy space for a tranquil retreat.
                </p>
              </div>
            </div>
          </div>
          <div className="rooms-container">
            <img src="./DoubleBed.jpeg" alt="Image 1" />
            <div className="room-text-container">
              <div className="left-aligned">
                <p>1-5 Guests</p>
                <h4>Double Bed</h4>
              </div>
              <div className="middle-aligned">
                <p>
                  The Double Full Beds room is a perfect for retreat, featuring
                  two full-size beds (additional foldouts available if needed)
                  for a comfortable night's rest.
                </p>
              </div>
            </div>
          </div>
          <div className="rooms-container">
            <img src="./2Queen.jpeg" alt="Image 1" />
            <div className="room-text-container">
              <div className="left-aligned">
                <p>1-5 Guests</p>
                <h4>Double Queen Bed</h4>
              </div>
              <div className="middle-aligned">
                <p>
                  The Double Queen Beds room accommodates 1-5 guests and offers
                  a spacious stay with two queen-size beds, and optional
                  foldouts if needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReservationPage() {
  return (
    <div>
      <ReservationPageBody/>
      <FooterSection/>
    </div>
  );
}
export default ReservationPage;
