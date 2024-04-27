import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/menu.css";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`menu ${menuOpen ? "open" : ""}`}>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776; {/* Hamburger icon */}
      </div>
      <div className="logo-container">
        <img
          src="/Logo512.png"
          alt="Logo"
          className="logo"
          onError={(e) => {
            e.target.onError = null; // Avoids looping
            e.target.src = "placeholder.png"; // Placeholder image if original fails
          }}
        />
        <div className="text-container">
          <div>Moffat Bay</div>
          <div>Marina & Lodge</div>
        </div>
      </div>
      <div className="menu-items">
        <Link to="/" className="menu-item">Home</Link>
        <Link to="/attractions" className="menu-item">Attractions</Link> {/* Assuming you have an attractions page */}
        <div className="submenu">
          <Link to="#" className="menu-item">My Reservations</Link> {/* Changed to # if it doesn't navigate */}
          <div className="submenu-items">
            <Link to="/reservation" className="submenu-item">Reservation</Link>
            <Link to="/reservation-summary" className="submenu-item">Summary</Link>
            <Link to="/reservation-lookup" className="submenu-item">Lookup</Link>
          </div>
        </div>
        <Link to="/register" className="menu-item">Register</Link>
        <Link to="/about-us" className="menu-item">About Us</Link>
        <Link to="/contact-us" className="menu-item">Contact Us</Link> {/* New Link for Contact Us page */}
        <Link to="/login" className="menu-item">Login</Link>
      </div>
    </div>
  );
}

export default Menu;

