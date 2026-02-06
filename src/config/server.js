/**
 * Initializes and configures the Express server.
 * Adds middleware for CORS and JSON request parsing.
 */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const initServer = () => {
  const app = express();

  app.use(cors());              // Enable Cross-Origin Resource Sharing
  app.use(bodyParser.json());   // Parse JSON request bodies

  return app;
};

module.exports = initServer;
