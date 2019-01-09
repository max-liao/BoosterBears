// User model
// ==============

// Require mongoose
var mongoose = require('mongoose')

// Create a schema class using mongoose's schema method
var Schema = mongoose.Schema

// Create the UserSchema with our schema class
var UserSchema = new Schema({
  User: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },
  summary: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  saved: {
    type: Boolean,
    default: false
  },
  timestamps: true
})

// Create the User model using the UserSchema
var User = mongoose.model('User', UserSchema)

// Export the User model
module.exports = User
