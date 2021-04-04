const DaoService = require('../dao/DaoService');

const ServiceController = {};

async function listServices() {
    let serviceList;
    await DaoService.list().then(result => {
        serviceList = result;
    });
    return serviceList;
}

async function saveService(service){
    let data;
    await DaoService.save(service).then(result =>{
        data = result;
    });
    return data;
}

async function viewService(serviceId) {
    let service;
    await DaoService.view(serviceId).then(result => {
        service = result;
    });
    return service;
}

async function updateService(service){
    const data = await DaoService.update(service);
    return data;
}

ServiceController.listServices = listServices;
ServiceController.saveService = saveService;
ServiceController.viewService = viewService;
ServiceController.updateService = updateService;

module.exports = ServiceController