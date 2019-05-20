// Dependencies
/* WEB FRAMEWORKS */
// create instance of express router
const router = require("express").Router();

// Set up individual API routes
// Product routes
const productRoutes = require("./products");
const userRoutes = require("./user")

// Sets path to use individual routes
// EXAMPLE:
//   router.use("/collectionName", collectionNameRoutes);
//   // www.url.com/api/collectionName will use routes from collectionNameRoutes
router.use("/products", productRoutes);
router.use("/user", userRoutes);

// Exports
// Export instance of express router which contains API routes
module.exports = router;