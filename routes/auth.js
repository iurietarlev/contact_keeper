const express = require('express');

const router = express.Router();

// @route  Get api/auth
// @desc   Get logged in user
// @access Private
router.get('/', (req, res) => {
  res.send('Register a user');
});

// @route  POST api/auth
// @desc   Auth user and get token
// @access Public
router.post('/', (req, res) => {
  res.send('Login user');
});

module.exports = router;
