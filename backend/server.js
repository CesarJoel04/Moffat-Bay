const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const db = require('./db');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

// Simple landing page route
app.get('/', (req, res) => {
  res.send('Welcome to the Moffat Bay Lodge!');
});

// Registration endpoint
app.post('/register', async (req, res) => {
  const { email, firstName, lastName, telephone, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 8);

  db.query('INSERT INTO Customers (email, first_name, last_name, telephone, password_hash) VALUES (?, ?, ?, ?, ?)', 
  [email, firstName, lastName, telephone, hashedPassword], (error, results) => {
    if (error) return res.status(500).send('Error registering the user');
    return res.status(201).send('User registered');
  });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM Customers WHERE email = ?', [email], async (error, results) => {
    if (error || results.length === 0 || !(await bcrypt.compare(password, results[0].password_hash))) {
      return res.status(401).send('Authentication failed');
    }
    // Here you should create and return a JSON Web Token (JWT) for authentication
    return res.status(200).send('Authentication successful');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
