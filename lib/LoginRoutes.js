const LoginController = require('../controller/LoginController');

const functions = [];

function routes(app) {

    app.get('/login/check', (req, res) => {
        async function getCustomer() {
            const customer = await LoginController.validateLogin(req.query.login);
            res.send(customer);
        };
        getCustomer();
    });

    app.post('/login/save', (req, res) => {
        if (req.body.loginId === 0) {
            async function saveLogin() {
                const message = await LoginController.saveLogin(req.body);
                res.send(message);
            };
            saveLogin();
        } else {
            async function updateLogin() {
                const message = await LoginController.updateLogin(req.body);
                res.send(message);
            };
            updateLogin();
        }
    });

}

functions.routes = routes;

module.exports = functions;