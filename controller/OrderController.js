const DaoOrder = require('../dao/DaoOrder')
const OrderController = {};

async function listOrders(customerId) {
    let orderList;
    await DaoOrder.list(customerId).then(result => {
        orderList = result;
    });
    return orderList;
}

async function saveOrder(order){
    const data = await DaoOrder.save(order);
    return data;
}

async function viewOrder(orderId) {
    let order;
    await DaoOrder.view(orderId).then(result => {
        order = result;
    });
    return order;
}

async function updateOrder(order){
    const data = await DaoOrder.update(order);
    return data;
}

OrderController.listOrders = listOrders;
OrderController.saveOrder = saveOrder;
OrderController.viewOrder = viewOrder;
OrderController.updateOrder = updateOrder;

module.exports = OrderController