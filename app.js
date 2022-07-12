const express = require("express");
const productsRouter = require("./routes/productsRouter");
const app = express();

app.use ("/products", productsRouter)
//const port = 5000
//app.listen (port,() =>{
//    console.log (`Server started on port ${port}...`);
//})

module.exports = app;