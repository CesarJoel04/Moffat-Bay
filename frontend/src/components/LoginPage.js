import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/commonStyles.css'; // Import common CSS styles

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your backend login API endpoint
      const response = await axios.post('http://localhost:3001/login', { email, password });
      console.log('Login successful:', response.data);
      // Redirect to home/landing page or dashboard after login
      navigate('/');
    } catch (error) {
      alert('Login failed: Invalid email or password');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Login</h2>
      </div>
      <form onSubmit={handleSubmit}>
        
        <div className="field"> {/* Apply field class */}
          <label className="label">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" maxLength="255" required /> {/* Apply input class and set max length */}
        </div>
        <div className="field">
          <label className="label">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" maxLength="255" required />
        </div>
        <button type="submit" className="button">Login</button> {/* Apply button class */}
      </form>
    </div>
  );
}

export default LoginPage;
