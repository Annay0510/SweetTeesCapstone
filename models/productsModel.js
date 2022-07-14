const mongoose = require ("mongoose");

const productsSchema = new mongoose.Schema({
    image: {
        type: String,
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
});

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;