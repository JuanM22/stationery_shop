const ProductController = require('../controller/ProductController');

const functions = [];

function routes(app){

    app.get('/product/view/:id', (req, res) => {
        async function getProduct() {
            const product = await ProductController.viewProduct(parseInt(req.params['id']));
            res.send(product);
        };
        getProduct();
    });

    app.get('/product/list', (req, res) =>{
        async function getProducts() {
            const products = await ProductController.listProducts();
            res.send(products);
        };
        getProducts();
    });

    app.post('/product/save', (req, res) =>{
        async function saveProduct() {
            const message = await ProductController.saveProduct(req.body);
            res.send(message);
        };
        saveProduct();
    });

    app.post('/product/update', (req, res) =>{
        async function updateProduct() {
            const message = await ProductController.updateProduct(req.body);
            res.send(message);
        };
        updateProduct();
    });

}

functions.routes = routes;

module.exports = functions;