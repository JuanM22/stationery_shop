class Order {

    constructor(orderId, customer, state, dispatchDate, deliveryDate, totalPrice, products, services) {
        this.orderId = orderId;
        this.customer = customer;
        this.state = state;
        this.dispatchDate = dispatchDate;
        this.deliveryDate = deliveryDate;
        this.totalPrice = totalPrice;
        this.products = products;
        this.services = services;
    }
}

module.exports = Order