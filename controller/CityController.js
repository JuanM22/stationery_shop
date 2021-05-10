const DaoCity = require('../dao/DaoCity')
const CityController = {};

async function listCities() {
    let citiesList;
    await DaoCity.list().then(result => {
        citiesList = result;
    });
    return citiesList;
}

async function viewCity(cityId) {
    let city;
    await DaoCity.view(cityId).then(result => {
        city = result;
    });
    return city;
}

CityController.listCities = listCities;
CityController.viewCity = viewCity;

module.exports = CityController