const DaoLogin = require('../dao/DaoLogin')
const LoginController = {};

async function saveLogin(login) {
    let data;
    await DaoLogin.lastLoginId().then(res => {
        login.loginId = (res.length > 0) ? res[0].loginId + 1 : 1;
    })
    await DaoLogin.save(login).then(res => {
        data = res;
    });
    return data;
}

async function updateLogin(login) {
    const data = await DaoLogin.update(login);
    return data;
}

LoginController.saveLogin = saveLogin;
LoginController.updateLogin = updateLogin;

module.exports = LoginController