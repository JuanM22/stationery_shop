const mongoose = require('mongoose');

const City = require('./City').schema;

const User = new mongoose.Schema({
    userId: Number,
    documentType: String,
    document: String,
    name: String,
    lastName: String,
    birthDate: String,
    phone: String,
    city: {
        type: City,
        default: {}
    },
    address: String,
    email: String,
    type: String,
    userPicture: String
},
    {
        collection: 'Users'
    }
);

module.exports = mongoose.model("User", User);
