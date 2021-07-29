const express = require('express');
const router = express.Router();

const OrderController = require('../controller/OrderController');

router.get('/view/:id', (req, res) => {
    async function getOrder() {
        const order = await OrderController.viewOrder(parseInt(req.params['id']));
        res.send(order);
    };
    getOrder();
});

router.get('/list', (req, res) => {
    async function getOrders() {
        const orders = await OrderController.listOrders(parseInt(req.query.userId));
        res.send(orders);
    };
    getOrders();
});

router.post('/save', (req, res) => {
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

module.exports = router;