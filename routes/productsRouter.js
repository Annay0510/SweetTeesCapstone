const express = require ("express");
const productController= require("./../controllers/productController");
const productsRouter = express.Router();

productsRouter
.route("/")
.get(productController.getProducts)
.post(productController.createProducts);

productsRouter
  .route("/:id")
  .get(productController.getOneProduct)
  .delete(productController.deleteProduct)
  .put(productController.updateProduct);

module.exports = productsRouter;