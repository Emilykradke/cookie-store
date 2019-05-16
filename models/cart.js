//  MongoDB object modeling tool
const mongoose = require("mongoose");

// Create Schema class under Schema variable
const Schema = mongoose.Schema;

// Create Schema for cartSchema
const cartSchema = new Schema({
  items: [],
  totalCost: {
    type: Number,
  }
})