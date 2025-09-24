const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = app; // export for tests
