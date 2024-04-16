// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/menuStyles.css'; // Import the menu CSS file

function Menu() {
  return (
    <div className="menu">
      <Link to="/" className="menu-item">Home</Link>
      <Link to="/login" className="menu-item">Login</Link>
      <Link to="/register" className="menu-item">Register</Link>
    </div>
  );
}

export default Menu;
