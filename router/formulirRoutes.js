const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM formulir', (err, results) => {
    if (err) {
      console.error('Gagal ambil data:', err);
      return res.status(500).json({ message: 'Gagal ambil data' });
    }
    res.json({ data: results });
  });
});

module.exports = router;
