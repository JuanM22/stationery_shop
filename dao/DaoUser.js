const dbConnection = require("../dbConnection");

const DaoUser = {}

function saveUser(user) {
    var client = dbConnection.getDbClient();
    var db = client.db();
    var message = '';
    return new Promise(resolve => {
        db.collection('Users').insertOne(user, function (err, result) {
            if (err) {
                message = 'Error al crear el usuario';
            } else {
                message = 'El usuario ha sido registrado correctamente';
            }
            resolve(message);
        });
    });
}

function updateUser(user) {
    var client = dbConnection.getDbClient();
    var db = client.db();
    var message = '';
    return new Promise(resolve => {
        db.collection('Users').updateOne({ userId: user.userId }, { $set: user }, function (err, result) {
            if (err) {
                message = 'Error al actualizar los datos del usuario';
            } else {
                message = 'Datos actualizados correctamente';
            }
            resolve(message);
        });
    });
}

function listUsers() {
    var client = dbConnection.getDbClient();
    var db = client.db();
    return new Promise(resolve => {
        db.collection('Users').find().toArray(function (err, result) {
            if (err) {
                resolve('Error al listar los usuarios');
            } else {
                resolve(result);
            }
        });
    });
}

function viewUser(userId) {
    var customer;
    var client = dbConnection.getDbClient();
    var db = client.db();
    return new Promise(resolve => {
        db.collection('Users').findOne({ userId : userId }, function (err, result) {
            if (err) {
                customer = null;
            } else {
                customer = result;
            }
            resolve(customer);
        });
    })
}

function lastUserId() {
    var client = dbConnection.getDbClient();
    var db = client.db();
    return new Promise(resolve => {
        db.collection('Users').find().sort({ orderId: -1 }).toArray(function (err, result) {
            if (err) {
                resolve('Error ejecutando la operación');
            } else {
                resolve(result);
            }
        });
    });
}

DaoUser.save = saveUser;
DaoUser.list = listUsers;
DaoUser.view = viewUser;
DaoUser.update = updateUser;
DaoUser.lastUserId = lastUserId;

module.exports = DaoUser