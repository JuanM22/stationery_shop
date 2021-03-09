const Customer = require("../model/Customer");
const dbConnection = require("../dbConnection");
const EventEmitter = require('events');

const DaoCustomer = {}

function saveCustomer(customer) {
    var client = dbConnection.getDbClient();
    if(customer.id == 0){
        console.log('Customer saved');
    } else {
        console.log('Customer updated');
    }
}

function listCustomers() {
    var client = dbConnection.getDbClient();
    var db = client.db();
    var customers = [];
    return new Promise(function (resolve, reject) {
        db.collection('products').find().toArray(function(err, result){
        if(resolve){
            resolve(result);
        }
        client.close();
        });
    }); 
} 

function viewCustomer(id) {
    // const customer = new Customer();
    // return customer;
}

DaoCustomer.save = saveCustomer;
DaoCustomer.list = listCustomers;
DaoCustomer.view = viewCustomer;

module.exports = DaoCustomer