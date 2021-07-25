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

function checkLogin(login) {
    login = JSON.parse(login);
    var client = dbConnection.getDbClient();
    var db = client.db();
    return new Promise(resolve => {
        db.collection('Logins').findOne({ user: login.user, password: login.password}, function (err, result) {
            if (err) resolve(null);
            else resolve(result);
        });
    });
}

function lastLoginId() {
    var client = dbConnection.getDbClient();
    var db = client.db();
    return new Promise(resolve => {
        db.collection('Logins').find().sort({ loginId: -1 }).toArray(function (err, result) {
            if (err) {
                resolve('Error ejecutando la operación');
            } else {
                resolve(result);
            }
        });
    });
}

DaoLogin.save = saveLogin;
DaoLogin.update = updateLogin;
DaoLogin.check = checkLogin;
DaoLogin.lastLoginId = lastLoginId;

module.exports = DaoLogin;