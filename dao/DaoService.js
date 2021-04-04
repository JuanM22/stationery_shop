const dbConnection = require("../dbConnection");

const DaoService = {}

function saveService(service) {
    var client = dbConnection.getDbClient();
    var db = client.db();
    var message = '';
    return new Promise(resolve => {
        db.collection('Services').insertOne(service, function (err) {
            if (err) {
                message = 'Error al crear el servicio';
            } else {
                message = 'El servicio ha sido creado correctamente';
            }
            resolve(message);
        });
    });
}

function updateService(service) {
    var client = dbConnection.getDbClient();
    var db = client.db();
    var message = '';
    return new Promise(resolve => {
        db.collection('Services').updateOne({ serviceId: service.serviceId }, { $set: service }, function (err) {
            if (err) {
                message = 'Error al actualizar los datos del servicio';
            } else {
                message = 'Datos actualizados correctamente';
            }
            resolve(message);
        });
    });
}

function listServices() {
    var client = dbConnection.getDbClient();
    var db = client.db();
    return new Promise(resolve => {
        db.collection('Services').find().toArray(function (err, result) {
            if (err) {
                resolve('Error al listar los servicios');
            } else {
                resolve(result);
            }
        });
    });
}

function viewService(serviceId) {
    var service;
    var client = dbConnection.getDbClient();
    var db = client.db();
    return new Promise(resolve => {
        db.collection('Services').findOne({ serviceId : serviceId }, function (err, result) {
            if (err) {
                service = null;
            } else {
                service = result;
            }
            resolve(service);
        });
    })
}

DaoService.save = saveService;
DaoService.list = listServices;
DaoService.view = viewService;
DaoService.update = updateService;

module.exports = DaoService