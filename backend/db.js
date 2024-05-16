const mysql = require('mysql')
const connection = mysql.createConnection({
  host: '127.0.0.1', // Use the IP address as mentioned in your MySQL Workbench details
  user: 'root', // Username remains the same
<<<<<<< Updated upstream
  password: 'root1', // Assuming the password provided is correct
=======
  password: '', // Assuming the password provided is correct
>>>>>>> Stashed changes
  database: 'moffat_bay_lodge_db', // Ensure this matches the exact name of your database
  port: 3306, // Explicitly specifying the port, though this is the default
})

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the database:', error)
    return
  }
  console.log('Successfully connected to the database.')
})

module.exports = connection
