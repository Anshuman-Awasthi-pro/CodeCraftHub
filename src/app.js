/**
 * Application entry point.
 * Initializes server, connects database, and loads routes.
 */

require('dotenv').config();
const connectDB = require('./config/db');
const initServer = require('./config/server');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./utils/errorHandler');

const app = initServer();

// Connect to MongoDB
connectDB();

// Load user routes
app.use('/api/users', userRoutes);

// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
