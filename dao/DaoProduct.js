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

function listProducts(productType) {
    var client = dbConnection.getDbClient();
    var db = client.db();
    return new Promise(resolve => {
        db.collection('Products').find({ type: productType }).toArray(function (err, result) {
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
        db.collection('Products').findOne({ productId: productId }, function (err, result) {
            if (err) {
                product = null;
            } else {
                product = result;
            }
            resolve(product);
        });
    })
}

function lastProductId() {
    var client = dbConnection.getDbClient();
    var db = client.db();
    return new Promise(resolve => {
        db.collection('Products').find().sort({ productId: -1 }).toArray(function (err, result) {
            if (err) {
                resolve('Error ejecutando la operación');
            } else {
                resolve(result);
            }
        });
    });
}


DaoProduct.save = saveProduct;
DaoProduct.list = listProducts;
DaoProduct.view = viewProduct;
DaoProduct.update = updateProduct;
DaoProduct.lastProductId = lastProductId;

module.exports = DaoProduct