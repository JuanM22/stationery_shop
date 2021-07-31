const User = require('../model/User');

const DaoUser = {}

function createUser(user){
    return new User({
        userId: user.userId,
        documentType: user.documentType,
        document: user.document,
        name: user.name,
        lastName: user.lastName,
        birthDate: user.birthDate,
        phone: user.phone,
        city: user.city,
        address: user.address,
        email: user.email,
        type: user.type,
        userPicture: user.userPicture
    });
}

async function saveUser(user) {
    const newUser = createUser(user);
    const response = await newUser.save();
    return (newUser === response) ? ['El usuario ha sido registrado correctamente', user.userId] : 'Error al crear el usuario';
}

async function updateUser(user) {
    const response = await User.updateOne({ userId: user.userId }, { $set: user });
    return (response.nModified === 1) ? 'Datos actualizados correctamente' : 'Error al actualizar los datos del usuario';
}

async function listUsers() {
    const users = await User.find();
    return users;
}

async function viewUser(userId) {
    const user = await User.findOne({ userId: userId });
    return user;
}

async function lastUserId() {
    const users = await User.find().sort({ userId: -1 });
    return users;
}

DaoUser.save = saveUser;
DaoUser.list = listUsers;
DaoUser.view = viewUser;
DaoUser.update = updateUser;
DaoUser.lastUserId = lastUserId;

module.exports = DaoUser