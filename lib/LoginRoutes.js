const LoginController = require('../controller/LoginController');

const functions = [];

function routes(app){

    app.get('/login/view/:id', (req, res) => {
        async function getCustomer() {
            const customer = await LoginController.viewLogin(parseInt(req.params['id']));
            res.send(customer);
        };
        getCustomer();
    });

    app.post('/login/save', (req, res) =>{
        async function saveCustomer() {
            const message = await LoginController.saveCustomer(req.body);
            res.send(message);
        };
        saveCustomer();
    });

    app.post('/login/update', (req, res) =>{
        async function updateCustomer() {
            const message = await LoginController.updateCustomer(req.body);
            res.send(message);
        };
        updateCustomer();
    });

}

functions.routes = routes;

module.exports = functions;