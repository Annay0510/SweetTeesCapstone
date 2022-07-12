const express =require ("express");

const productsRouter = express.Router();

const getProducts = (req,res) =>{
    res.send("Hello World");
}
productsRouter.route("/").get(getProducts);

module.exports = productsRouter;