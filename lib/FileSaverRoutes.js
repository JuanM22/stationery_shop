const express = require('express');
const router = express.Router();

const FileSaverController = require('../controller/FileSaver');

router.post('/save', (req, res) => {
    async function saveFiles() {
        let response = "";
        await FileSaverController.saveFiles(req).then(res => {
            response = res;
        });
        res.send(response);
    };
    saveFiles();
});

router.get('/getFile/:fileName', (req, res) => {
    async function getFiles() {
        res.sendFile(FileSaverController.getFiles(req.params['fileName']));
    };
    getFiles();
});

module.exports = router;