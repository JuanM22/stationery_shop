const mongoose = require('mongoose');

const City = new mongoose.Schema({
    cityId: Number,
    name: String
},
    {
        collection: "Cities"
    }
);

module.exports = mongoose.model("City", City);