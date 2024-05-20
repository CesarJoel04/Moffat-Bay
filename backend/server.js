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
    total_cost,
  } = req.body
  const query =
    'INSERT INTO Reservations (customer_id, room_id, check_in_date, check_out_date, number_of_guests, total_reservation_cost) VALUES (?, ?, ?, ?, ?, ?)'

  
  const price_per_night = number_of_guests <= 2 ? 120.75 : 157.50
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



// Look up reservation endpoint
app.post('/reservations', (req, res) => {
  const { customerEmail, reservationId } = req.body;

  let whereClause = ''; // Initialize the WHERE clause

  if (customerEmail && reservationId) {
    // If both email and reservation_id are provided
    whereClause = 'WHERE c.email = ? AND rs.reservation_id = ?';
  } else if (customerEmail) {
    // If only email is provided
    whereClause = 'WHERE c.email = ?';
  } else if (reservationId) {
    // If only reservation_id is provided
    whereClause = 'WHERE rs.reservation_id = ?';
  } else {
    // If neither email nor reservation_id is provided, throw an error
    return res.status(400).send('Please provide either customer email or reservation ID');
  }

  db.query(
    `SELECT 
      c.first_name AS FirstName,
      c.last_name AS LastName,
      DATE_FORMAT(rs.check_in_date, '%Y-%m-%d') AS checkinDate,
      DATE_FORMAT(rs.check_out_date, '%Y-%m-%d') AS checkOutDate,
      DATE_FORMAT(rs.booking_date, '%Y-%m-%d') AS bookingDate,
      r.room_size AS RoomSize,
      rs.number_of_guests AS NoOfGuests,
      DATEDIFF(rs.check_out_date, rs.check_in_date) AS NumberOfDays,
      rs.total_reservation_cost AS TotalPrice
    FROM 
      customers c 
    INNER JOIN 
      reservations rs ON c.customer_id = rs.customer_id
    LEFT JOIN 
      rooms r ON r.room_id = rs.room_id
    LEFT JOIN 
      guestpricing gp ON rs.number_of_guests BETWEEN gp.min_guests AND gp.max_guests
    ${whereClause}`,
    customerEmail && reservationId ? [customerEmail, reservationId] : // Pass both parameters if both are provided
      customerEmail ? [customerEmail] : // Pass email parameter if only email is provided
      reservationId ? [reservationId] : [], // Pass reservation_id parameter if only reservation_id is provided
    (error, results) => {
      if (error) {
        console.error('Error executing query:', error);
        return res.status(500).send('Error retrieving reservation');
      }
      if (results.length === 0) {
        // No reservations found, send empty array as response
        return res.status(200).json([]);
      }
      // Format dates properly before sending the response
      const formattedResults = results.map(result => ({
        ...result,
        checkinDate: new Date(result.checkinDate).toLocaleDateString(),
        checkOutDate: new Date(result.checkOutDate).toLocaleDateString(),
        bookingDate: new Date(result.bookingDate).toLocaleDateString(),
      }));
      return res.status(200).json(formattedResults);
    }
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
