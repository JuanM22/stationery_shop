const dbConnection = require("../dbConnection");

const DaoLogin = {}

function saveLogin(login) {
    var client = dbConnection.getDbClient();
    var db = client.db();
    var message = '';
    return new Promise(resolve => {
        db.collection('Logins').insertOne(login, function (err) {
            if (err) {
                message = 'Error al crear el login';
            } else {
                message = 'El login ha sido creado correctamente';
            }
            resolve(message);
        });
    });
}

function updateLogin(login) {
    var client = dbConnection.getDbClient();
    var db = client.db();
    var message = '';
    return new Promise(resolve => {
        db.collection('Logins').updateOne({$set: { login }}, function (err) {
            if (err) {
                message = 'Error al actualizar los datos del login';
            } else {
                message = 'Datos actualizados correctamente';
            }
            resolve(message);
        });
    });
}

function viewLogin(login) {
    var login;
    var client = dbConnection.getDbClient();
    var db = client.db();
    return new Promise(resolve => {
        db.collection('Logins').findOne({ user: login.user, password: login.password}, function (err, result) {
            if (err) {
                login = null;
            } else {
                login = result;
            }
            resolve(login);
        });
    })
}

DaoLogin.save = saveLogin;
DaoLogin.update = updateLogin;
DaoLogin.view = viewLogin;

module.exports = DaoLogin;