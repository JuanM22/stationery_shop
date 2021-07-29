const Product = require('../model/Product');

const DaoProduct = {}

function createProduct(product) {
    return (product.stock) ?
        new Product({
            productId: product.productId,
            name: product.name,
            description: product.description,
            unitPrice: product.unitPrice,
            stock: product.stock,
            images: product.images,
            category: product.category,
            type: product.type,
        })
        :
        new Product({
            productId: product.productId,
            name: product.name,
            description: product.description,
            unitPrice: product.unitPrice,
            images: product.images,
            category: product.category,
            type: product.type,
        })
}

async function saveProduct(product) {
    const newProduct = createProduct(product);
    const response = await newProduct.save();
    return (newProduct === response) ? 'El producto ha sido registrado correctamente' : 'Error al crear el producto';
}

async function updateProduct(product) {
    const response = await Product.updateOne({ productId: product.productId }, { $set: product });
    return (response.nModified === 1) ? 'Datos actualizados correctamente' : 'Error al actualizar los datos del producto';
}

async function listProducts(productType) {
    const products = await Product.find({ productType: productType });
    return products;
}

async function viewProduct(productId) {
    const product = await Product.findOne({ productId: productId });
    return product;
}

async function lastProductId() {
    const products = await Product.find().sort({ productId: -1 });
    return products;
}


DaoProduct.save = saveProduct;
DaoProduct.list = listProducts;
DaoProduct.view = viewProduct;
DaoProduct.update = updateProduct;
DaoProduct.lastProductId = lastProductId;

module.exports = DaoProduct