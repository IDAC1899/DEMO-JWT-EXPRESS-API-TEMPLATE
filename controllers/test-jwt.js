// controllers/test-jwt.js

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/sign-token', (req, res) => {
  const user = {
    id: 1,
    username: 'test',
    password: 'test',
  };

  const token = jwt.sign({ user }, process.env.JWT_SECRET);

  res.json({ token });
});

module.exports = router;