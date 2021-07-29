const mongoose = require('mongoose');

server = {}

function connectToDatabase(){
    mongoose.connect('mongodb://localhost:27017/stationery_Shop', () => {
        console.log('Connection to Data Base Succesfully...');
    });
}

server.connectToDatabase = connectToDatabase;

module.exports = server;


