const express = require('express');
const router = express.Router();

const ProductController = require('../controller/ProductController');

router.get('/view/:id', (req, res) => {
    async function getProduct() {
        const product = await ProductController.viewProduct(parseInt(req.params['id']));
        res.send(product);
    };
    getProduct();
});

router.get('/list', (req, res) => {
    async function getProducts() {
        const products = await ProductController.listProducts(req.query.productType);
        res.send(products);
    };
    getProducts();
});

router.post('/save', (req, res) => {
    if (req.body.productId === 0) {
        async function saveProduct() {
            const message = await ProductController.saveProduct(req.body);
            res.send(message);
        };
        saveProduct();
    } else {
        async function updateProduct() {
            const message = await ProductController.updateProduct(req.body);
            res.send(message);
        };
        updateProduct();
    }
});

module.exports = router;