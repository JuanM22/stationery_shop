const express = require('express');
const router = express.Router();

const CityController = require('../controller/CityController');

router.get('/list', (req, res) => {
    async function getCities() {
        const cities = await CityController.listCities();
        res.send(cities);
    };
    getCities();
});

module.exports = router;