const Customer = require("../model/Customer");
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
    })
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

function viewCustomer(id) {
    // const customer = new Customer();
    // return customer;
}

DaoCustomer.save = listCustomers;
DaoCustomer.list = listCustomers;
DaoCustomer.view = viewCustomer;

module.exports = DaoCustomer