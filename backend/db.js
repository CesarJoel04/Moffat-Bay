const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost', // Use the IP address as mentioned in your MySQL Workbench details
  user: 'root', // Username remains the same
  password: 'Joel@2024', // Assuming the password provided is correct
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
