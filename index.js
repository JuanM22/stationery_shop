const dbConnection = require('./dbConnection');
dbConnection.connectToServer();

const express = require('express');
const app = express();
app.use(express.json());

require('./lib/Routes')(app);

const port = 8090;

app.listen(port, function () {
    console.log('Server running at localhost:' + port);
});



