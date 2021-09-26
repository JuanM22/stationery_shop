const Order = require('../model/Order');

const DaoOrder = {}

function createOrder(order){
    return new Order({
        orderId: order.orderId,
        user: order.user,
        state: true,
        dispatchDate: order.dispatchDate,
        deliveryDate: order.deliveryDate,
        totalPrice: order.totalPrice,
        products: order.products,
        services: order.services
    });
}

async function saveOrder(order) {
    const newOrder = createOrder(order);
    const response = await newOrder.save();
    return (newOrder === response) ? 'El pedido ha sido registrado correctamente' : 'Error al crear el pedido';
}

async function updateOrder(order) {
    console.log(order.orderId);
    const response = await Order.updateOne({ orderId: order.orderId }, { $set: {state : order.state} });
    return (response.nModified === 1) ? 'Datos actualizados correctamente' : 'Error al actualizar los datos del pedido';
}

async function listOrders(userId) {
    var orders = [];
    if(userId === 0) orders = await Order.find({state : true});
    else orders = await Order.find({"user.userId" : userId, state : true});
    return orders;
}

async function viewOrder(orderId) {
    const order = await Order.findOne({ orderId: orderId });
    return order;
}

async function lastOrderId() {
    const orders = await Order.find().sort({ orderId: -1 });
    return orders;
}


DaoOrder.save = saveOrder;
DaoOrder.list = listOrders;
DaoOrder.view = viewOrder;
DaoOrder.update = updateOrder;
DaoOrder.lastOrderId = lastOrderId;

module.exports = DaoOrder