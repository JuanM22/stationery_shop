const mongoose = require('mongoose');

const Login = new mongoose.Schema({
    loginId: Number,
    username: String,
    password: String
},
    {
        collection : 'Logins'
    }
);

module.exports = mongoose.model("Login", Login);