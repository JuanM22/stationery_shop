const dbConnection = require("../dbConnection");

const DaoCustomer = {}

function saveCustomer(customer) {
    var client = dbConnection.getDbClient();
    var db = client.db();
    var message = '';
    return new Promise(resolve => {
        db.collection('Customers').insertOne(customer, function (err, result) {
            if (err) {
                message = 'Error al crear el cliente';
            } else {
                message = 'El cliente ha sido creado correctamente';
            }
            resolve(message);
        });
    });
}

function updateCustomer(customer) {
    var client = dbConnection.getDbClient();
    var db = client.db();
    var message = '';
    return new Promise(resolve => {
        db.collection('Customers').updateOne({ customerId: customer.customerId }, { $set: customer }, function (err, result) {
            if (err) {
                message = 'Error al actualizar los datos del cliente';
            } else {
                message = 'Datos actualizados correctamente';
            }
            resolve(message);
        });
    });
}

function listCustomers() {
    var client = dbConnection.getDbClient();
    var db = client.db();
    return new Promise(resolve => {
        db.collection('Customers').find().toArray(function (err, result) {
            if (err) {
                resolve('Error al listar los clientes');
            } else {
                resolve(result);
            }
        });
    });
}

function viewCustomer(customerId) {
    var customer;
    var client = dbConnection.getDbClient();
    var db = client.db();
    return new Promise(resolve => {
        db.collection('Customers').findOne({ customerId : customerId }, function (err, result) {
            if (err) {
                customer = null;
            } else {
                customer = result;
            }
            resolve(customer);
        });
    })
}

DaoCustomer.save = saveCustomer;
DaoCustomer.list = listCustomers;
DaoCustomer.view = viewCustomer;
DaoCustomer.update = updateCustomer;

module.exports = DaoCustomer