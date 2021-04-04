const DaoProduct = require('../dao/DaoProduct');

const ProductController = {};

async function listProducts() {
    let productList;
    await DaoProduct.list().then(result => {
        productList = result;
    });
    return productList;
}

async function saveProduct(product){
    let data;
    await DaoProduct.save(product).then(result =>{
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

async function updateProduct(product){
    const data = await DaoProduct.update(product);
    return data;
}

ProductController.listProducts = listProducts;
ProductController.saveProduct = saveProduct;
ProductController.viewProduct = viewProduct;
ProductController.updateProduct = updateProduct;

module.exports = ProductController

