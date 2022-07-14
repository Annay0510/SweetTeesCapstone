const express = require("express");
const cors = require ("cors");
const productsRouter = require("./routes/productsRouter");
const app = express();

// app.use(express.urlencoded({
//     extended: false,
// })
// );
app.use(cors())

app.use(express.json());

app.use(express.static("public"));

app.use ("/products", productsRouter);
//const port = 5000
//app.listen (port,() =>{
//    console.log (`Server started on port ${port}...`);
//})

module.exports = app;