class Product {

    constructor(productId, name, description, unitPrice, images) {
        this.productId = productId;
        this.name = name;
        this.description = description;
        this.unitPrice = unitPrice;
        this.images = images;
    }
}

module.exports = Product