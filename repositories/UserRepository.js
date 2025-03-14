const User = require('../models/User');

const getUsers = async () => {
  return await User.find({ name: { $exists: true }, lastName: { $exists: true } })
    .select({ name: 1, lastName: 1, fullName: { $concat: ['$name', ' ', '$lastName'] } });
};

const findUser = async (id) => {
  return await User.findById(id);
};

module.exports = {
  getUsers,
  findUser,
};
