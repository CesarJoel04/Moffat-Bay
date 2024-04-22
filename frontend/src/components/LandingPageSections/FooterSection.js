// Footer.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/footerStyles.css";

function FooterSection() {
  const [email, setEmail] = useState("");
  const buttonStyle = {
    height: "6vh",
    width: "10vw",
  };
  return (
    <footer className="footer-wrapper">
      <div className="footer-grid-container">
        <div className="item combined">
          <h2 className="ft-bold-label">Stay In Touch</h2>
        </div>
        <div className="item left-aligned">
          <h4 style={{ textAlign: "left", paddingLeft: "40px" }}>Useful</h4>
          <div className="footer-menu">
            <ul>
              <li className="footer-menu-item">
                <Link to="/">Home</Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/reservations">Reservations</Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="item">
          <p>
            Stay connected with us! Join our mailing list to receive updates and
            special discounts.
          </p>
          <label className="label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            maxLength="255"
            required
          />
          <div className="btn-container">
            <Link
              to="/destination-page"
              className="cta-button"
              style={buttonStyle}
            >
              Subscribe
            </Link>
          </div>
        </div>
        <div className="item right-aligned">
          <h4 style={{ textAlign: "right", paddingRight: "30px" }}>
            Learn More
          </h4>
          <div className="footer-menu">
            <ul>
              <li className="footer-menu-item">
                <a href="#">About Us</a>
              </li>
              <li className="footer-menu-item">
                <a href="#">Attractions</a>
              </li>
              <li className="footer-menu-item">
                <a href="#">Accommodations</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="item combined">
          <p className="text-center">
            © 2024 Moffat Bay Lodge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
