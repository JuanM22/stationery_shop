const CustomerController = require('../controller/CustomerController');

const functions = [];

function routes(app){

    app.get('/customer/view/:id', (req, res) => {
        async function getCustomer() {
            const customer = await CustomerController.viewCustomer(parseInt(req.params['id']));
            res.send(customer);
        };
        getCustomer();
    });

    app.get('/customer/list', (req, res) =>{
        async function getCustomers() {
            const customers = await CustomerController.listCustomers();
            res.send(customers);
        };
        getCustomers();
    });

    app.post('/customer/save', (req, res) =>{
        async function saveCustomer() {
            const message = await CustomerController.saveCustomer(req.body);
            res.send(message);
        };
        saveCustomer();
    });

    app.post('/customer/update', (req, res) =>{
        async function updateCustomer() {
            const message = await CustomerController.updateCustomer(req.body);
            res.send(message);
        };
        updateCustomer();
    });

}

functions.routes = routes;

module.exports = functions;