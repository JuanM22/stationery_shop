const DaoLogin = require('../dao/DaoLogin')
const LoginController = {};

async function saveLogin(login){
    const data = await DaoLogin.save(login);
    return data;
}

async function viewLogin(login) {
    await DaoLogin.view(login).then(result => {
        login = result;
    });
    return login;
}

async function updateLogin(login){
    const data = await DaoLogin.update(login);
    return data;
}

LoginController.saveLogin = saveLogin;
LoginController.viewLogin = viewLogin;
LoginController.updateLogin = updateLogin;

module.exports = LoginController