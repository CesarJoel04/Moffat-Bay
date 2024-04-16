import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/commonStyles.css'; // Import the common CSS file

function LandingPage() {
  return (
    <div className="container">
      <div className="header">
        <h1>Welcome to Moffat Bay Lodge!</h1>
        <p>Discover your next great adventure.</p>
      </div>
    </div>
  );
}

export default LandingPage;
