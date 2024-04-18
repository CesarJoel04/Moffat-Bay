// ReservationPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ReservationPage() {
    const [roomSize, setRoomSize] = useState('');
    const [guests, setGuests] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!roomSize || !guests || !checkInDate || !checkOutDate) {
            alert('Please fill in all fields.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/reserve', { 
                room_id: roomSize,
                customer_id: 1,
                number_of_guests: guests,
                check_in_date: checkInDate,
                check_out_date: checkOutDate
            });
            // Navigate to the summary page with the reservation details
            navigate('/reservation-summary', { state: { reservation: {
                reservationId: response.data.reservationId,
                roomSize: roomSize,
                number_of_guests: guests,
                check_in_date: checkInDate,
                check_out_date: checkOutDate
            }}});
        } catch ( error ) {
            alert('Reservation failed:', error.response && error.response.data ? error.response.data : "Unknown error");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Room Size:
                <select value={roomSize} onChange={e => setRoomSize(e.target.value)}>
                    <option value="1">Double Full Beds</option>
                    <option value="2">Queen</option>
                    <option value="3">Double Queen Beds</option>
                    <option value="4">King</option>
                </select>
            </label>
            <label>Number of Guests:
                <input type="number" value={guests} onChange={e => setGuests(e.target.value)} min="1" max="5" />
            </label>
            <label>Check-In Date:
                <input type="date" value={checkInDate} onChange={e => setCheckInDate(e.target.value)} />
            </label>
            <label>Check-Out Date:
                <input type="date" value={checkOutDate} onChange={e => setCheckOutDate(e.target.value)} />
            </label>
            <button type="submit">Book Your Vacation</button>
        </form>
    );
}

export default ReservationPage;




