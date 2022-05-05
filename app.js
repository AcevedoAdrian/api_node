require('dotenv').config(); // Load environment variables from .env file
const express = require('express'); // Import express
const cors = require('cors'); // Import cors
const dbConnect = require('./config/mongo'); // Import dbConnect

const app = express(); // Create express app
app.use(cors()); // Enable cors, 

const port = process.env.PORT || 3000;  // Set port from environment variable or 3000

app.listen(port, () =>{
  console.log(`Server is running on port https://localhost:${port}`);
}) // Start serve, escuhca por el puerto 3000
dbConnect(); // Connect to database