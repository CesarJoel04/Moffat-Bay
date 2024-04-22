import React from "react";
import { Link } from "react-router-dom";
import "../../styles/roomStyles.css";

function RoomsSection() {
  const buttonStyle = {
    height: "10vh",
    width: "20vw",
  };
  return (
    <section className="our-rooms">
      <div className="rooms-text">
        <h1 className="bold-label">WELCOME TO MOFFAT BAY MARINA & LODGE</h1>
        <p>
          Moffat Bay Marina & Lodge, is a unique destination resort set on 120
          lush acres. Restaurants stunningly designed by top architects and
          designers provide world-class dining experiences include Stripsteak by
          Michael Mina, Libertine Social by Shawn McClain, Border Grill and KUMI
          to name a few. The 30,000-square-foot spa is one of the finest and
          offers comprehensive services, treatments and exercise equipment.
          Visit the Shoppes at Moffat Bay - a collection of experiential venues,
          eclectic stores and one-of a-kind shops. Shark Reef aquarium is home
          to over 2,000 animals including, the saw fish, giant rays, endangered
          green sea turtle, jellyfish and the rare golden crocodile.
        </p>
        <div className="blank-space"></div>
        <h4 className="bold-label">Rooms & Suits</h4>
        <p>
          At Moffat Bay Marina & Lodge, our luxurious accommodation offers a
          welcoming retreat after a day on the water. We can provide the perfect
          space for your stay. Wake up to breathtaking sunrises over the bay,
          unwind under a starlit sky, or prepare yourself for a new adventure.
          Our staff is ready to pamper and serve you today!
        </p>
      </div>
      <div className="rooms-container">
        <div className="room-card">
          <img src="./King4.jpeg" alt="Image" />
          <div className="label">King Bed</div>
          <div className="description">1-5 Guests</div>
        </div>
        <div className="room-card">
          <img src="./King3.jpeg" alt="Image" />
          <div className="label">King Bed</div>
          <div className="description">1-5 Guests</div>
        </div>
        <div className="room-card">
          <img src="./Queen1.jpeg" alt="Image" />
          <div className="label">Queen Bed</div>
          <div className="description">1-5 Guests</div>
        </div>
        <div className="room-card">
          <img src="./Queen1a.jpeg" alt="Image" />
          <div className="label">Queen Bed</div>
          <div className="description">1-5 Guests</div>
        </div>
        <div className="room-card">
          <img src="./2Queen.jpeg" alt="Image" />
          <div className="label">Double Queen Beds</div>
          <div className="description">1-5 Guests</div>
        </div>
        <div className="room-card">
          <img src="./2Queen1.jpeg" alt="Image" />
          <div className="label">Double Queen Beds</div>
          <div className="description">1-5 Guests</div>
        </div>
        <div className="room-card">
          <img src="./DoubleBed.jpeg" alt="Image" />
          <div className="label">Double Beds</div>
          <div className="description">1-5 Guests</div>
        </div>
        <div className="room-card">
          <img src="./DoubleBed1.jpeg" alt="Image" />
          <div className="label">Double Beds</div>
          <div className="description">1-5 Guests</div>
        </div>
      </div>
      <div className="btn-container">
        <Link to="/reservation" className="cta-button" style={buttonStyle}>
          View Our Rooms
        </Link>
      </div>
    </section>
  );
}

export default RoomsSection;
