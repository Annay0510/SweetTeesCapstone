const mongoose = require ("mongoose");

const productsSchema = new mongoose.Schema({
    image: {
        type: String,
    },
    description: {
        type: String,
    },
    price: Number,
});

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;