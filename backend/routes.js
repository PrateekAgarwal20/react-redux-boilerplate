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

/**
* This route checks that the front and back end are synced with the same permissions.
* One way to do this is to check if the user is logged in. If there are no users,
* you may not need redux persist and can delete this section.
*/
router.get('/sync', (req, res) => {
  // If passport state is not present, user is not logged in on the backend
  res.send({
    success: true,
    error: "",
    userId: userId,
  });
});

module.exports = router;
