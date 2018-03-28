const mongoose = require('mongoose');

// Import schemas from their files
const UserSchema = requre('./user');

// Create models from schemas
const User = mongoose.model('User', UserSchema);

// Export all models
module.exports = {
  User: User
}
