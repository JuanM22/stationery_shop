class Service {

    constructor(serviceId, name, description, unitPrice, images) {
        this.serviceId = serviceId;
        this.name = name;
        this.description = description;
        this.unitPrice = unitPrice;
        this.images = images;
    }
}

module.exports = Service