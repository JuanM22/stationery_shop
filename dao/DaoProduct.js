const dbConnection = require("../dbConnection");

const DaoProduct = {}

function saveProduct(product) {
    var client = dbConnection.getDbClient();
    var db = client.db();
    var message = '';
    return new Promise(resolve => {
        db.collection('Products').insertOne(product, function (err) {
            if (err) {
                message = 'Error al crear el producto';
            } else {
                message = 'El producto ha sido creado correctamente';
            }
            resolve(message);
        });
    });
}

function updateProduct(product) {
    var client = dbConnection.getDbClient();
    var db = client.db();
    var message = '';
    return new Promise(resolve => {
        db.collection('Products').updateOne({ productId: product.productId }, { $set: product }, function (err) {
            if (err) {
                message = 'Error al actualizar los datos del producto';
            } else {
                message = 'Datos actualizados correctamente';
            }
            resolve(message);
        });
    });
}

function listProducts() {
    var client = dbConnection.getDbClient();
    var db = client.db();
    return new Promise(resolve => {
        db.collection('Products').find().toArray(function (err, result) {
            if (err) {
                resolve('Error al listar los productos');
            } else {
                resolve(result);
            }
        });
    });
}

function viewProduct(productId) {
    var product;
    var client = dbConnection.getDbClient();
    var db = client.db();
    return new Promise(resolve => {
        db.collection('Products').findOne({ productId : productId }, function (err, result) {
            if (err) {
                product = null;
            } else {
                product = result;
            }
            resolve(product);
        });
    })
}

DaoProduct.save = saveProduct;
DaoProduct.list = listProducts;
DaoProduct.view = viewProduct;
DaoProduct.update = updateProduct;

module.exports = DaoProduct