//  MongoDB object modeling tool
const mongoose = require("mongoose");

// Create Schema class under Schema variable
const Schema = mongoose.Schema;

// Create Schema for userSchema
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String, 
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// EXPORTS
const User = mongoose.model("Users", userSchema);
module.exports = User;