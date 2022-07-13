const dotenv = require ("dotenv");

const mongoose = require("mongoose");

dotenv.config({
    path:"./config.env"
});

const app= require("./app");

const DB = mongoose.connect(process.env.DATABASE.replace
("<password>", process.env.DATABASE_PASSWORD),{
useCreateIndex: true,
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false,
}).then(() =>{
    console.log("DATABASE IS UP AND RUNNING...");
}).catch((error) => {
    console.log(error.message)
})

const PORT = process.env.PORT;

app.listen (PORT,() =>{
    console.log (`Server started on port ${PORT}...`);
})