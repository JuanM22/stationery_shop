const dbConnection = require('./dbConnection');
dbConnection.connectToServer();

const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const app = express();

app.use(express.json());
app.use(fileUpload())
app.use(cors());

require('./lib/Routes')(app);

const port = 8090;

app.listen(port, function () {
    console.log('Server running at localhost:' + port);
});



