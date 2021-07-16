const CityRoutes = require('./CityRoutes');
const CustomerRoutes = require('./CustomerRoutes');
const LoginRoutes = require('./LoginRoutes');
const OrderRoutes = require('./OrderRoutes');
const ProductRoutes = require('./ProductRoutes');

module.exports = function (app) {

    app.get('/index', (req, res) => {
        res.send('index page');
    });

    CityRoutes.routes(app);

    CustomerRoutes.routes(app);

    LoginRoutes.routes(app);

    OrderRoutes.routes(app);

    ProductRoutes.routes(app);

}