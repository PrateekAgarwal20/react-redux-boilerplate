// Import external frameworks
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Pull data from the environment variables
const secret = process.env.SESSION_SECRET;

// Ensure data is present
let error = "";
if(!secret) {
  error: "SESSION_SECRET"
}
if (error) {
  console.error("ERROR: missing " + error + " environment variable");
  // Exit the server if some environment variables were not present
  process.exit();
}

// Import app
const api = require('./backend/routes');

// Storage of information
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// Connecting to mongo
//mongoose.connect(MONGODB_URI);

// Middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret,
  store: new MongoStore({mongooseConnection: mongoose.connection}),
  resave: true,
  saveUninitialized: true,
}));

// Prefix all backend routes with "/api"
app.use('/api', api);

// All other routes go to the frontend
app.get('*', (request, response) => {
  response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

// Listen on the proper port for the application
app.listen(PORT, err => {
  err
  ? console.error(err)
  : console.info(`🐖 🐷 🐽 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
