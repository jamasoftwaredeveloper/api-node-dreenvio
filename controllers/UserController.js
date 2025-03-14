const userService = require('../services/UserService');

export const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error al obtener usuarios', error: error.message });
  }
};

export const findUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userService.findUser(id);
    res.status(200).json(user);
  } catch (error) {
    res
      .status(error.message === 'Usuario no encontrado' ? 404 : 500)
      .json({ message: error.message });
  }
};
