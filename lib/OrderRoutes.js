const OrderController = require('../controller/OrderController');

const functions = [];

function routes(app) {

    app.get('/order/view/:id', (req, res) => {
        async function getOrder() {
            const order = await OrderController.viewOrder(parseInt(req.params['id']));
            res.send(order);
        };
        getOrder();
    });

    app.get('/order/list/:customerId', (req, res) => {
        async function getOrders() {
            const orders = await OrderController.listOrders(parseInt(req.params['customerId']));
            res.send(orders);
        };
        getOrders();
    });

    app.post('/order/save', (req, res) => {
        if (req.body.orderId === 0) {
            async function saveOrder() {
                const message = await OrderController.saveOrder(req.body);
                res.send(message);
            };
            saveOrder();
        } else {
            async function updateOrder() {
                const message = await OrderController.updateOrder(req.body);
                res.send(message);
            };
            updateOrder();
        }
    });

}

functions.routes = routes;

module.exports = functions;