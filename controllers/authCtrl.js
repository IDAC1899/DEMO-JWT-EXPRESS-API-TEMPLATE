// controllers/auth.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/user');

const saltRounds = 12;

router.post('/sign-up', async (req, res) => {
  try {
    const userInDatabase = await User.findOne({ username: req.body.username });

    if (userInDatabase) {
      return res.status(409).json({ err: 'Username already taken.' });
    }

    const user = await User.create({
      username: req.body.username,
      hashedPassword: bcrypt.hashSync(req.body.password, saltRounds),
    });

    res.status(201).json({ user });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

module.exports = router;