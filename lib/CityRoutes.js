const CityController = require('../controller/CityController');

const functions = [];

function routes(app){

    app.get('/city/view/:id', (req, res) => {
        async function getCity() {
            const city = await CityController.viewCity(parseInt(req.params['id']));
            res.send(city);
        };
        getCity();
    });

    app.get('/city/list', (req, res) =>{
        async function getCities() {
            const cities = await CityController.listCities();
            res.send(cities);
        };
        getCities();
    });

}

functions.routes = routes;

module.exports = functions;