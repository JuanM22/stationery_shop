const DaoProduct = require('../dao/DaoProduct');

const ProductController = {};

async function listProducts(productType) {
    let productList;
    await DaoProduct.list(productType).then(res => {
        productList = res;
    });
    return productList;
}

async function saveProduct(product) {
    let data;
    await DaoProduct.lastProductId().then(res => {
        product.productId = (result.length > 0) ? res[0].productId + 1 : 1;
    });
    await DaoProduct.save(product).then(res => {
        data = res;
    });
    return data;
}

async function viewProduct(productId) {
    let product;
    await DaoProduct.view(productId).then(res => {
        product = res;
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

