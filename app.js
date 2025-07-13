const express = require('express');
const app = express();
const PORT = 3000;

const items = require('./data/items.json'); // Load JSON data

app.use(express.static('public')); // Serve static files from /public

// API endpoint to get JSON data
app.get('/api/items', (req, res) => {
  res.json(items);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
