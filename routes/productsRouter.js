const express = require ("express");
const productController= require("./../controllers/productController");
const productsRouter = express.Router();

productsRouter
.route("/")
.get(productController.getProducts)
.post(productController.createProducts);

module.exports = productsRouter;