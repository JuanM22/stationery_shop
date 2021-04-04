const dbConnection = require("../dbConnection");

const DaoCity = {}

function listCities() {
    var client = dbConnection.getDbClient();
    var db = client.db();
    return new Promise(resolve => {
        db.collection('Cities').find().toArray(function (err, result) {
            if (err) {
                resolve('Error al listar las ciudades');
            } else {
                resolve(result);
            }
        });
    });
}

function viewCity(cityId) {
    var city;
    var client = dbConnection.getDbClient();
    var db = client.db();
    return new Promise(resolve => {
        db.collection('Cities').findOne({ cityId : cityId }, function (err, result) {
            if (err) {
                city = null;
            } else {
                city = result;
            }
            resolve(city);
        });
    })
}

DaoCity.list = listCities;
DaoCity.view = viewCity;

module.exports = DaoCity;
