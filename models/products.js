//  MongoDB object modeling tool
const mongoose = require("mongoose");

// Create Schema class under Schema variable
const Schema = mongoose.Schema;

// Create Schema for collectionNameSchema
const productSchema = new Schema({
  imagePath: {
    type: String,
    required: true
  },
  flavor: {
    type: String, 
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number, 
    required: true
  },
  nuts: {
    type: Boolean
  },
  gluten: {
    type: Boolean 
  }
});

// EXPORTS
const Product = mongoose.model("Products", productSchema);
module.exports = Product;
