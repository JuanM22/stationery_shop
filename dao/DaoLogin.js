const Login = require("../model/Login");

const DaoLogin = {}

function createLogin(login){
    return new Login({
        loginId: login.loginId,
        username: login.username,
        password: login.password,
        userId: login.userId
    });
}

async function saveLogin(login) {
    const newLogin = createLogin(login);
    const response = await newLogin.save();
    return (newLogin === response) ? 'Login created successfully' : 'Error al crear el login';
}

async function updateLogin(login) {
    const response = await Login.updateOne({ loginId: login.loginId }, { $set: login });
    return (response.nModified === 1) ? 'Datos actualizados correctamente' : 'Error al actualizar los datos del login';
}

async function lastLoginId() {
    const logins = await Login.find().sort({ loginId: -1 });
    return logins;
}


DaoLogin.save = saveLogin;
DaoLogin.update = updateLogin;
DaoLogin.lastLoginId = lastLoginId;

module.exports = DaoLogin;