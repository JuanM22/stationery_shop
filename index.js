const Customer = require('./model/Customer')
const DaoCustomer = require('./dao/DaoCustomer')
const dbConnection = require('./dbConnection')
const EventEmitter = require('events')
const Subscribe = require('subscribe-event')

dbConnection.connectToServer();

setTimeout(()=>{
    // customer = new Customer(0, 'calle 500 # 21-13', 'Tunja', 1049653379,'juan123@gmail.com','Martìnez','Juan','juan123',3189042345);
    listar();
    // eventEmitter.on('success', function(data){
    //     console.log(data);
    // });
},2000);

async function listar(){
   const data = await (DaoCustomer.list());
   console.log(data);
}