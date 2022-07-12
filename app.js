const express = require ("express");
const productsRouter = require("./routes/productsRouter");

const app = express();

//const getProducts = (req, res) =>{
 //   res.send ("Hello World!")
//    }
//App.get ("/", getProducts);
app.use("/products", productsRouter);


const port = 3000;

App.listen (port,() => {
    console.log (`Server started on port ${port}...`);
});