const City = require('../model/City');
const DaoCity = {}

async function listCities() {
    const cities = await City.find();
    return cities;
}

async function viewCity(cityId) {
    const city = await City.findOne({cityId: cityId});
    return city;
}

DaoCity.list = listCities;
DaoCity.view = viewCity;

module.exports = DaoCity;
