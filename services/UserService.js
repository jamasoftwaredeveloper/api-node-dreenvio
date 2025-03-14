const userRepository = require('../repositories/UserRepository');

const getUsers = async () => {
  return await userRepository.getUsers();
};

const findUser = async (id) => {
  const user = await userRepository.findUser(id);
  if (!user) {
    throw new Error('Producto no encontrado');
  }
  return user;
};

module.exports = {
  getUsers,
  findUser,
};
