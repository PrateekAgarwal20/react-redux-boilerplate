// Import frameworks
const express = require('express');

// Instantiate router
const router = express.Router();

// Import models
/*Example: const User = require(./models/models).User;*/

/**
* Base route
*/
router.get('/', (req, res) => {
  res.send({
    success: true,
    data: "Welcome to the Boilerplate!"
  })
});

module.exports = router;
