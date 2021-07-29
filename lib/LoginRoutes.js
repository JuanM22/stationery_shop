const express = require('express');
const router = express.Router();

const LoginController = require('../controller/LoginController');

router.post('/save', (req, res) => {
    if (req.body.loginId === 0) {
        async function saveLogin() {
            const message = await LoginController.saveLogin(req.body);
            res.send(message);
        };
        saveLogin();
    } else {
        async function updateLogin() {
            const message = await LoginController.updateLogin(req.body);
            res.send(message);
        };
        updateLogin();
    }
});

module.exports = router;