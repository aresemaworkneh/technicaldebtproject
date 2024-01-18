
  // Import express
const express = require('express');

// Create an instance of express
const app = express();

// Define a port
const PORT = process.env.PORT || 5000;

// Define a test route
app.get('/api/test', (req, res) => {
  res.send({ message: 'Connection successful!' });
});

// Make the app listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
