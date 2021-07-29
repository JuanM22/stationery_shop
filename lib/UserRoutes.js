const express = require('express');
const router = express.Router();

const UserController = require('../controller/UserController');

router.get('/view/:id', (req, res) => {
    async function getUser() {
        const user = await UserController.viewUser(parseInt(req.params['id']));
        res.send(user);
    };
    getUser();
});

router.get('/list', (req, res) => {
    async function getUsers() {
        const customers = await UserController.listUsers();
        res.send(customers);
    };
    getUsers();
});

router.post('/save', (req, res) => {
    if (req.body.userId === 0) {
        async function saveUser() {
            const message = await UserController.saveUser(req.body);
            res.send(message);
        };
        saveUser();
    } else {
        async function updateUser() {
            const message = await UserController.updateUser(req.body);
            res.send(message);
        };
        updateUser();
    }
});

module.exports = router;