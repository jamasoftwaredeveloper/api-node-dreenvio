const User = require('../models/User');

const getUsers = async () => {
  return await User.find();
};

const findUser = async (id) => {
  return await User.findById(id);
};

module.exports = {
  getUsers,
  findUser,
};
