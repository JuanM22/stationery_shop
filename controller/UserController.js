const DaoUser = require('../dao/DaoUser')
const DaoCity = require('../dao/DaoCity')
const UserController = {};

async function listUsers() {
    let userList;
    await DaoUser.list().then(result => {
        userList = result;
    });
    return userList;
}

async function saveUser(user){
    let city;
    await DaoCity.view(user.city.cityId).then(result => {
        city = result;
    });
    user.city = city;
    await DaoUser.lastUserId().then(res => {
        user.userId = (res.length > 0) ? res[0].userId + 1 : 1;
    })
    const data = await DaoUser.save(user);
    console.log(data);
    return data;
}

async function viewUser(userId) {
    let user;
    await DaoUser.view(userId).then(result => {
        user = result;
    });
    return user;
}

async function updateUser(user){
    const data = await DaoUser.update(user);
    return data;
}

UserController.listUsers = listUsers;
UserController.saveUser = saveUser;
UserController.viewUser = viewUser;
UserController.updateUser = updateUser;

module.exports = UserController