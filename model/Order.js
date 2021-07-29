const mongoose = require('mongoose');

const User = require('./User').schema;
const Product = require('./Product').schema;

const Order = new mongoose.Schema({
    orderId: Number,
    user: {
        type: User,
        default: {}
    },
    state: Boolean,
    dispatchDate: String,
    deliveryDate: String,
    totalPrice: Number,
    products: [Product],
    services: [Product]
},
    {
        collection: 'Orders'
    }
);

module.exports = mongoose.model("Order", Order);