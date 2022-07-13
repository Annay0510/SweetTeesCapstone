const express = require ("express");
const productController= require("./../controllers/productController");
const productsRouter = express.Router();

//const getProducts = (req,res) =>{
  //  res.send("Hello World");
//}
productsRouter
.route("/")
.get(productController.getProducts)
.post(productController.createProducts);

module.exports = productsRouter;