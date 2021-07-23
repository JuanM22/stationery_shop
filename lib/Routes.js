const CityRoutes = require('./CityRoutes');
const UserRoutes = require('./UserRoutes');
const LoginRoutes = require('./LoginRoutes');
const OrderRoutes = require('./OrderRoutes');
const ProductRoutes = require('./ProductRoutes');
const FileSaverRoutes = require('./FileSaverRoutes');

module.exports = function (app) {

    app.get('/index', (req, res) => {
        res.send('index page');
    });

    CityRoutes.routes(app);

    UserRoutes.routes(app);

    LoginRoutes.routes(app);

    OrderRoutes.routes(app);

    ProductRoutes.routes(app);

    FileSaverRoutes.routes(app);

}