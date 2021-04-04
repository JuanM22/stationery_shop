const Customer = require('./model/Customer')
const DaoCustomer = require('./dao/DaoCustomer')
const dbConnection = require('./dbConnection');
const DaoCity = require('./dao/DaoCity');

dbConnection.connectToServer();

setTimeout(() => {
    const customer = new Customer(1, 'calle 500 # 21-13', 1049653379,'juan123@gmail.com','Martìnez','Sebastian','juan123',3189042345);
    save(customer);
    // listar();
    // view();
    // update();
}, 2000);

async function listar() {
    await DaoCustomer.list().then(result => {
        console.log(result);
    });
}

async function save(customer){
    let city;
    await DaoCity.view(2).then(result => {
        city = result;
    });
    customer.city.cityId = city.cityId;
    customer.city.name = city.name;
    const data = await (DaoCustomer.save(customer));
    console.log(data);
}

async function view() {
    let data;
    await DaoCustomer.view(1).then(result => {
        data = result;
    });
    return data;
}

async function update(){
    let customer;
    await view().then(result => {
        customer = result;
    });
    customer.name = 'JuanSebastian';
    await DaoCustomer.update(customer).then(result =>{
        console.log(result);
    });
}

