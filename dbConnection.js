var MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/webstore';
var dbClient;

server = {};

async function connectToServer() {
    await MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true, poolSize: 5, reconnectInterval: 500 }, function (err, client) {
        console.log('Connection to Data Base Succesfully...');
        dbClient = client;
    });
}

function getDbClient() {
    return dbClient;
}

server.connectToServer = connectToServer;
server.getDbClient = getDbClient;

module.exports = server;


