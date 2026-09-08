// controllers/test-jwt.js

const express = require('express');
const router = express.Router();

router.get('/sign-token', (req, res) => {
  res.json({ message: 'You are authorized!' });
});

module.exports = router;