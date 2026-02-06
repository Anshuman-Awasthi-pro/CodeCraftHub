/**
 * Service layer for reusable user-related logic.
 */

const User = require('../models/userModel');

/**
 * Fetch a user by ID.
 */
exports.findUserById = async (userId) => {
  return await User.findById(userId);
};
