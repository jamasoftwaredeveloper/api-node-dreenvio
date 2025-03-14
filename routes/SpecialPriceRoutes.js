const express = require('express');
const { createSpecialPrice, deleteSpecialPrice, getSpecialPrices, showSpecialPrice, updateSpecialPrice } = require('../controllers/SpecialPriceController');
const router = express.Router();
const { validateSpecialPrice } = require('../middlewares/validateSpecialPrice');

/**
 * @swagger
 * tags:
 *   name: SpecialPrices
 *   description: API para gestionar precios especiales
 */

/**
 * @swagger
 * /special-prices:
 *   get:
 *     summary: Obtiene una lista de precios especiales
 *     tags: [SpecialPrices]
 *     responses:
 *       200:
 *         description: Lista de precios especiales
 */
router.get('/', validateSpecialPrice.listSpecialPrices, getSpecialPrices);

/**
 * @swagger
 * /special-prices/create:
 *   post:
 *     summary: Crea un nuevo precio especial
 *     tags: [SpecialPrices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: string
 *               product_id:
 *                 type: string
 *               special_price:
 *                 type: number
 *               start_date:
 *                 type: string
 *                 format: date
 *               end_date:
 *                 type: string
 *                 format: date
 *               is_active:
 *                 type: boolean
 *             required:
 *               - user_id
 *               - product_id
 *               - special_price
 *               - start_date
 *               - end_date
 *     responses:
 *       201:
 *         description: Precio especial creado exitosamente
 *       400:
 *         description: Solicitud incorrecta
 */
router.post('/create', validateSpecialPrice.create, createSpecialPrice);

/**
 * @swagger
 * /special-prices/update/{id}:
 *   put:
 *     summary: Actualiza un precio especial existente
 *     tags: [SpecialPrices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del precio especial a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: string
 *               product_id:
 *                 type: string
 *               special_price:
 *                 type: number
 *               start_date:
 *                 type: string
 *                 format: date
 *               end_date:
 *                 type: string
 *                 format: date
 *               is_active:
 *                 type: boolean
 *             required:
 *               - user_id
 *               - product_id
 *               - special_price
 *               - start_date
 *               - end_date
 *     responses:
 *       200:
 *         description: Precio especial actualizado exitosamente
 *       404:
 *         description: Precio especial no encontrado
 *       400:
 *         description: Solicitud incorrecta
 */
router.put('/update/:id', validateSpecialPrice.update, updateSpecialPrice);

/**
 * @swagger
 * /special-prices/show/{id}:
 *   get:
 *     summary: Ver un precio especial existente
 *     tags: [SpecialPrices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del precio especial a ver
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ver un precio especial exitosamente
 *       404:
 *         description: Precio especial no encontrado
 */
router.get('/show/:id', validateSpecialPrice.findSpecialPrice, showSpecialPrice);

/**
 * @swagger
 * /special-prices/delete/{id}:
 *   delete:
 *     summary: Elimina un precio especial existente
 *     tags: [SpecialPrices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del precio especial a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Precio especial eliminado exitosamente
 *       404:
 *         description: Precio especial no encontrado
 */
router.delete('/delete/:id', validateSpecialPrice.delete, deleteSpecialPrice);

module.exports = router;