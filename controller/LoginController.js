const DaoLogin = require('../dao/DaoLogin')
const LoginController = {};

async function saveLogin(login) {
    let data;
    await DaoLogin.lastLoginId().then(res => {
        login.loginId = (res.length > 0) ? res[0].login + 1 : 1;
    })
    await DaoLogin.save(login).then(res => {
        data = res;
    });
    return data;
}

async function validateLogin(login) {
    await DaoLogin.check(login).then(result => {
        login = result;
    });
    return login;
}

async function updateLogin(login) {
    const data = await DaoLogin.update(login);
    return data;
}

LoginController.saveLogin = saveLogin;
LoginController.validateLogin = validateLogin;
LoginController.updateLogin = updateLogin;

module.exports = LoginController