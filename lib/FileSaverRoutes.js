const FileSaverController = require('../controller/FileSaver');

const functions = [];

function routes(app) {

    app.post('/file/save', (req, res) => {
        async function saveFiles() {
            let response = "";
            await FileSaverController.saveFiles(req).then(res => {
                response = res;
            });
            res.send(response);
        };
        saveFiles();
    });

    app.get('/file/getFile/:fileName', (req, res) => {
        async function getFiles() {
            res.sendFile(FileSaverController.getFiles(req.params['fileName']));
        };
        getFiles();
    });

}

functions.routes = routes;

module.exports = functions;