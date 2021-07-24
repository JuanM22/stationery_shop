const dbConnection = require("../dbConnection");

const DaoOrder = {}

function saveOrder(order) {
    var client = dbConnection.getDbClient();
    var db = client.db();
    var message = '';
    return new Promise(resolve => {
        db.collection('Orders').insertOne(order, function (err) {
            if (err) {
                message = 'Error al crear el pedido';
            } else {
                message = 'El pedido ha sido creado correctamente';
            }
            resolve(message);
        });
    });
}

function updateOrder(order) {
    var client = dbConnection.getDbClient();
    var db = client.db();
    var message = '';
    return new Promise(resolve => {
        db.collection('Orders').updateOne({ orderId: order.orderId }, { $set: { state: order.state } }, function (err) {
            if (err) {
                message = 'Error al actualizar los datos del pedido';
            } else {
                message = 'Datos actualizados correctamente';
            }
            resolve(message);
        });
    });
}

function listOrders(userId) {
    var client = dbConnection.getDbClient();
    var db = client.db();
    if (userId == 0) {
        return new Promise(resolve => {
            db.collection('Orders').find().toArray(function (err, result) {
                if (err) {
                    resolve('Error al listar los pedidos');
                } else {
                    resolve(result);
                }
            });
        });
    } else {
        return new Promise(resolve => {
            db.collection('Orders').find({ "user.userId" : userId }).toArray(function (err, result) {
                if (err) {
                    resolve('Error al listar los pedidos');
                } else {
                    resolve(result);
                }
            });
        });
    }
}

function viewOrder(orderId) {
    var order;
    var client = dbConnection.getDbClient();
    var db = client.db();
    return new Promise(resolve => {
        db.collection('Orders').findOne({ orderId: orderId }, function (err, result) {
            if (err) {
                order = null;
            } else {
                order = result;
            }
            resolve(order);
        });
    })
}

function lastOrderId() {
    var client = dbConnection.getDbClient();
    var db = client.db();
    return new Promise(resolve => {
        db.collection('Orders').find().sort({ orderId: -1 }).toArray(function (err, result) {
            if (err) {
                resolve('Error ejecutando la operación');
            } else {
                resolve(result);
            }
        });
    });
}


DaoOrder.save = saveOrder;
DaoOrder.list = listOrders;
DaoOrder.view = viewOrder;
DaoOrder.update = updateOrder;
DaoOrder.lastOrderId = lastOrderId;

module.exports = DaoOrder