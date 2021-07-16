class Product {

    constructor(productId, name, description, unitPrice, images, type) {
        this.productId = productId;
        this.name = name;
        this.description = description;
        this.unitPrice = unitPrice;
        this.images = images;
        this.type = type;
    }
}

module.exports = Product