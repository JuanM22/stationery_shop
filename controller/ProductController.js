const DaoProduct = require('../dao/DaoProduct');

const ProductController = {};

async function listProducts(productType) {
    let productList;
    await DaoProduct.list(productType).then(result => {
        productList = result;
    });
    return productList;
}

async function saveProduct(product) {
    let data;
    await DaoProduct.lastProductId().then(result => {
        product.productId = (result.length > 0) ? result[0].productId + 1 : 1;
    })
    await DaoProduct.save(product).then(result => {
        data = result;
    });
    return data;
}

async function viewProduct(productId) {
    let product;
    await DaoProduct.view(productId).then(result => {
        product = result;
    });
    return product;
}

async function updateProduct(product) {
    const data = await DaoProduct.update(product);
    return data;
}

ProductController.listProducts = listProducts;
ProductController.saveProduct = saveProduct;
ProductController.viewProduct = viewProduct;
ProductController.updateProduct = updateProduct;

module.exports = ProductController

