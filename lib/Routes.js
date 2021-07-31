const CityRoutes = require('./CityRoutes');
const FileSaverRoutes = require('./FileSaverRoutes');
const LoginRoutes = require('./LoginRoutes');
const OrderRoutes = require('./OrderRoutes');
const ProductRoutes = require('./ProductRoutes');
const UserRoutes = require('./UserRoutes');

module.exports = function (app) {

    app.use((req, res, next) => {
        const exceptRoutes = ["/login", "/logout", "/city/list", "/user/register", "/file/save", "/login/save", "/check"];
        if (exceptRoutes.indexOf(req.originalUrl.replace(/\?.*$/, '')) !== -1) {
            next();
        } else {
            if (req.isAuthenticated()) next();
            else res.status(401).send('Unauthenticated');

        }
    });

    app.use('/city', CityRoutes);

    app.use('/file', FileSaverRoutes);

    app.use('/login', LoginRoutes);

    app.use('/order', OrderRoutes);

    app.use('/product', ProductRoutes);

    app.use('/user', UserRoutes);

}