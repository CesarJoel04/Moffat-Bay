const express = require('express')
const bcrypt = require('bcryptjs')
const cors = require('cors')
const db = require('./db')

const app = express()
const port = 3001

app.use(express.json())
app.use(cors())

// Simple landing page route
app.get('/', (req, res) => {
  res.send('Welcome to the Moffat Bay Lodge!')
})

// Registration endpoint
app.post('/register', async (req, res) => {
  const { email, firstName, lastName, telephone, password } = req.body
  const hashedPassword = await bcrypt.hash(password, 8)

  db.query(
    'INSERT INTO Customers (email, first_name, last_name, telephone, password_hash) VALUES (?, ?, ?, ?, ?)',
    [email, firstName, lastName, telephone, hashedPassword],
    (error, results) => {
      if (error) return res.status(500).send('Error registering the user')
      return res.status(201).send('User registered')
    }
  )
})

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body

  db.query(
    'SELECT * FROM Customers WHERE email = ?',
    [email],
    async (error, results) => {
      if (
        error ||
        results.length === 0 ||
        !(await bcrypt.compare(password, results[0].password_hash))
      ) {
        return res.status(401).send('Authentication failed')
      }
      return res.status(200).send('Authentication successful')
    }
  )
})

// Reservation endpoint
app.post('/reserve', (req, res) => {
  const {
    customer_id,
    room_id,
    check_in_date,
    check_out_date,
    number_of_guests,
  } = req.body
  const query =
    'INSERT INTO Reservations (customer_id, room_id, check_in_date, check_out_date, number_of_guests, total_reservation_cost) VALUES (?, ?, ?, ?, ?, ?)'

  let total_cost = 0
  const price_per_night = number_of_guests <= 2 ? 115.0 : 150.0
  const days =
    (new Date(check_out_date) - new Date(check_in_date)) / (1000 * 3600 * 24)
  total_cost = days * price_per_night

  db.query(
    query,
    [
      customer_id,
      room_id,
      check_in_date,
      check_out_date,
      number_of_guests,
      total_cost,
    ],
    (error, results) => {
      if (error) {
        console.error('Error making reservation:', error)
        return res.status(500).send('Error making reservation')
      }
      return res
        .status(201)
        .send({
          message: 'Reservation successful',
          reservationId: results.insertId,
        })
    }
  )
})

// Submit reservation endpoint (simulated)
app.post('/submit-reservation', (req, res) => {
  const { reservation_id } = req.body

  // Simulate successful submission without database update
  console.log('Reservation submitted successfully with ID:', reservation_id)
  return res.status(200).send({ message: 'Reservation submitted successfully' })
})

// Cancel reservation endpoint
app.delete('/cancel-reservation', (req, res) => {
  const { reservation_id } = req.body

  db.query(
    'DELETE FROM Reservations WHERE reservation_id = ?',
    [reservation_id],
    (error, results) => {
      if (error) {
        console.error('Error canceling reservation:', error)
        return res.status(500).send('Error canceling reservation')
      }
      return res
        .status(200)
        .send({ message: 'Reservation canceled successfully' })
    }
  )
})

//Look up reservation endpoint
app.get('/reservations/:customerId/:reservationId', (req, res) => {
  const { customerId, reservationId } = req.params;

  db.query(
    'SELECT * FROM reservations WHERE customer_id = ? AND reservation_id = ?',
    [customerId, reservationId],
    (error, results) => {
      if (error) {
        console.error('Error executing query:', error);
        return res.status(500).send('Error retrieving reservation');
      }
      if (results.length === 0) {
        return res.status(404).send('Reservation not found');
      }
      return res.status(200).json(results[0]);
    }
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
