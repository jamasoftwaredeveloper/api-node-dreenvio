const express = require('express');

import { getProducts } from '../controllers/ProductController';

const router = express.Router();
import { validateProduct } from '../middlewares/validateProduct';
/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API para gestionar productos
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Obtiene una lista de productos
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: ID del producto
 *                   name:
 *                     type: string
 *                     description: Nombre del producto
 *                   price:
 *                     type: number
 *                     description: Precio del producto
 *                   category:
 *                     type: string
 *                     description: Categoría del producto
 *                   stock:
 *                     type: number
 *                     description: Cantidad en stock del producto
 *                   description:
 *                     type: string
 *                     description: Descripción del producto
 *                   brand:
 *                     type: string
 *                     description: Marca del producto
 *                   sku:
 *                     type: string
 *                     description: SKU del producto
 *                   tags:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: Etiquetas del producto
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: Fecha de creación del producto
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     description: Fecha de actualización del producto
 */
router.get('/', validateProduct.listProducts, getProducts);

module.exports = router;
