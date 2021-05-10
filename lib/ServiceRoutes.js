const ServiceController = require('../controller/ServiceController');

const functions = [];

function routes(app){

    app.get('/service/view/:id', (req, res) => {
        async function getService() {
            const service = await ServiceController.viewService(parseInt(req.params['id']));
            res.send(service);
        };
        getService();
    });

    app.get('/service/list', (req, res) =>{
        async function getServices() {
            const services = await ServiceController.listServices();
            res.send(services);
        };
        getServices();
    });

    app.post('/service/save', (req, res) =>{
        async function saveService() {
            const message = await ServiceController.saveService(req.body);
            res.send(message);
        };
        saveService();
    });

    app.post('/service/update', (req, res) =>{
        async function updateService() {
            const message = await ServiceController.updateService(req.body);
            res.send(message);
        };
        updateService();
    });

}

functions.routes = routes;

module.exports = functions;