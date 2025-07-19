const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // allow frontend to connect
app.use(express.json()); // parse JSON body

// Route to handle form submission
app.post('/api/submit', async (req, res) => {
  const { textbox1, textbox2, textbox3 } = req.body;

  try {
    await pool.query(
      'INSERT INTO form_data (textbox1, textbox2, textbox3) VALUES ($1, $2, $3)',
      [textbox1, textbox2, textbox3]
    );

    res.json({ message: 'Data saved successfully!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Failed to save data.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
