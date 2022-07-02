const express = require ("express");
const App = express();

App.get ("/", (req, res) =>{
    res.send ("Hello!")
    });

const port = 3000;

App.listen (port,() => {
    console.log (`Server started on port ${port}...`);
});

