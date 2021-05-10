const DaoOrder = require('../dao/DaoOrder');
const DaoCustomer = require('../dao/DaoCustomer');
const DaoProduct = require('../dao/DaoProduct');
const DaoService = require('../dao/DaoService');
const OrderController = {};

async function listOrders(customerId) {
    let orderList;
    await DaoOrder.list(customerId).then(result => {
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
    const data = await DaoOrder.save(order);
    return data;
}

async function viewOrder(orderId) {
    let order;
    await DaoOrder.view(orderId).then(result => {
        order = result;
    });
    await DaoCustomer.view(order.customer.customerId).then(result => {
        order.customer = result;
    });
    for (let i = 0; i < order.products.length; i++) {
        let product = order.products[i];
        await DaoProduct.view(product.productId).then(result => {
            order.products[i] = result;
        });
    }
    for (let i = 0; i < order.services.length; i++) {
        let service = order.services[i];
        await DaoService.view(service.serviceId).then(result => {
            order.services[i] = result;
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