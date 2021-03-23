const Customer = require('./model/Customer')
const DaoCustomer = require('./dao/DaoCustomer')
const dbConnection = require('./dbConnection')

dbConnection.connectToServer();

setTimeout(() => {
    // const customer = new Customer(0, 'calle 500 # 21-13', 'Tunja', 1049653379,'juan123@gmail.com','Martìnez','Juan','juan123',3189042345);
    // save(customer);
    listar();
}, 2000);

async function listar() {
    await DaoCustomer.list().then(result => {
        console.log(result);
    });
}

async function save(customer){
    const data = await (DaoCustomer.save(customer));
    console.log(data);
}


