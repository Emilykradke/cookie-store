// Dependencies
/* WEB FRAMEWORKS */
// create instance of express router
const router = require("express").Router();

// Sets up API routes for products
// Imports in controller for products
const ProductsController = require("../../controllers/productsController.js");

// Matches with "/api/products" this is defined in "../index.js"
router.route("/")  
  .get(ProductsController.findAll)
  .post(ProductsController.create);

// Matches with "/api/products/:id" this is defined in "../index.js"
router
  .route("/:id")
  .get(ProductsController.findById)
  .put(ProductsController.update)
  .delete(ProductsController.remove);

// Export instance of express router which contains collectionName routes
module.exports = router;
