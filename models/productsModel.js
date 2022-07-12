const mongoose = require ("mongoose");

const productsSchema = new mongoose.Schema({
    image: {
        type: String,
    },
    description: {
        type: String,
    },
});

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;