const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    productId: Number,
    name: String,
    description: String,
    unitPrice: Number,
    stock: {
        type: Number,
        required: false
    },
    images: [String],
    category: String,
    type: String,
    featureList: [{}]
},
    {
        collection: 'Products'
    }
);

module.exports = mongoose.model("Product", Product);