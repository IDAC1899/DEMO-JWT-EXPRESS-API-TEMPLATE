// controllers/users.js

const express = require('express');
const router = express.Router();

const User = require('../models/user');
const verifyToken = require('../middleware/verify-token');

router.get('/', verifyToken, async (req, res) => {
  try {
    const users = await User.find({}, "username");

    res.json(users);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

module.exports = router;