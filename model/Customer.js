const City = require('./City');

class Customer {

    constructor(id, address, document, email, lastName, name, password, phone) {
        this.customerId = id;
        this.address = address;
        this.city = new City();
        this.document = document;
        this.email = email;
        this.lastName = lastName;
        this.name = name;
        this.password = password;
        this.phone = phone;
    }
}

module.exports = Customer