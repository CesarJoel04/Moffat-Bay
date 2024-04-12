import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1>Welcome to Moffat Bay Lodge!</h1>
      <p>Discover your next great adventure.</p>
      <div>
        <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default LandingPage;
