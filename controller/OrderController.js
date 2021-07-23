const DaoOrder = require('../dao/DaoOrder');
const Daouser = require('../dao/Daouser');
const DaoProduct = require('../dao/DaoProduct');
const OrderController = {};

async function listOrders(userId) {
    let orderList;
    await DaoOrder.list(userId).then(result => {
        orderList = result;
    });
    for (let i = 0; i < orderList.length; i++) {
        await viewOrder(orderList[i].orderId).then(response => {
            orderList[i] = response;
        });
    }
    return orderList;
}

async function saveOrder(order) {
    let data;
    await DaoOrder.lastOrderId().then(res => {
        order.orderId = (res.length > 0) ? res[0].orderId + 1 : 1;
    })
    await DaoOrder.save(order).then(res => {
        data = res;
    });
    return data;
}

async function viewOrder(orderId) {
    let order;
    await DaoOrder.view(orderId).then(result => {
        order = result;
    });
    await Daouser.view(order.user.userId).then(result => {
        order.user = result;
    });
    for (let i = 0; i < order.products.length; i++) {
        let product = order.products[i];
        await DaoProduct.view(product.productId).then(result => {
            order.products[i] = result;
        });
    }
    return order;
}

async function updateOrder(order) {
    const data = await DaoOrder.update(order);
    return data;
}

OrderController.listOrders = listOrders;
OrderController.saveOrder = saveOrder;
OrderController.viewOrder = viewOrder;
OrderController.updateOrder = updateOrder;

module.exports = OrderController