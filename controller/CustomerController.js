const DaoCustomer = require('../dao/DaoCustomer')
const DaoCity = require('../dao/DaoCity')
const CustomerController = {};

async function listCustomers() {
    let customerList;
    await DaoCustomer.list().then(result => {
        customerList = result;
    });
    return customerList;
}

async function saveCustomer(customer){
    let city;
    await DaoCity.view(customer.city.cityId).then(result => {
        city = result;
    });
    customer.city.cityId = city.cityId;
    customer.city.name = city.name;
    const data = await DaoCustomer.save(customer);
    return data;
}

async function viewCustomer(customerId) {
    let customer;
    await DaoCustomer.view(customerId).then(result => {
        customer = result;
    });
    return customer;
}

async function updateCustomer(customer){
    const data = await DaoCustomer.update(customer);
    return data;
}

CustomerController.listCustomers = listCustomers;
CustomerController.saveCustomer = saveCustomer;
CustomerController.viewCustomer = viewCustomer;
CustomerController.updateCustomer = updateCustomer;

module.exports = CustomerController