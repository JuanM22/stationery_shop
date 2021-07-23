const UserController = require('../controller/UserController');

const functions = [];

function routes(app) {

    app.get('/user/view/:id', (req, res) => {
        async function getUser() {
            const user = await UserController.viewUser(parseInt(req.params['id']));
            res.send(user);
        };
        getUser();
    });

    app.get('/user/list', (req, res) => {
        async function getUsers() {
            const customers = await UserController.listUsers();
            res.send(customers);
        };
        getUsers();
    });

    app.post('/user/save', (req, res) => {
        if (req.body.userId === 0) {
            async function saveUser() {
                const message = await UserController.saveUser(req.body);
                res.send(message);
            };
            saveUser();
        } else {
            async function updateUser() {
                const message = await UserController.updateUser(req.body);
                res.send(message);
            };
            updateUser();
        }
    });

}

functions.routes = routes;

module.exports = functions;