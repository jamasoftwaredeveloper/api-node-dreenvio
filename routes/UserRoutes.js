const express = require('express');
const { getUsers, findUser } = require('../controllers/userController');
const router = express.Router();
const { validateUser } = require('../middlewares/validateUser');
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API para gestionar usuarios
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtiene una lista de usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
router.get('/', validateUser.listUsers, getUsers);
/**
 * @swagger
 * /users/show/{id}:
 *   get:
 *     summary: Ver un usuario existente
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a ver
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Ver un usuario exitosamente
 *       404:
 *         description: Usuario no encontrado
 */
router.get('/show/:id', validateUser.findUser, findUser);

module.exports = router;
