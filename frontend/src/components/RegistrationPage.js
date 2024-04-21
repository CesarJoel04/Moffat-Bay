import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/commonStyles.css'; // Import common CSS styles

function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [telephone, setTelephone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your backend registration API endpoint
      const response = await axios.post('http://localhost:3001/register', { email, password, firstName, lastName, telephone });
      console.log('Registration successful:', response.data);
      // Redirect to login page after registration
      navigate('/login');
    } catch (error) {
      alert('Registration failed: Please try again');
    }
  };

  return (
    <div className="container"> 
      <div className="form-header">
        <h2>Register:</h2>
      </div>
      <form onSubmit={handleSubmit}>
    <div class="form-row">
      <div class="form-group">
        <label class="label">First Name</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} class="input" maxLength="100" required />
      </div>
      <div class="form-group">
        <label class="label">Last Name</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} class="input" maxLength="100" required />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="label">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="input" maxLength="255" required />
      </div>
      <div class="form-group">
        <label class="label">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="input" maxLength="255" required />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
      <label class="label">Telephone</label>
        <input type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} class="input" required />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
    <button type="submit" class="button">Register</button>
          </div>
    </div>
  </form>


    </div>
  );
}

export default RegistrationPage;
