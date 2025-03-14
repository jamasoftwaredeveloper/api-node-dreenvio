const { body, param, query, validationResult } = require('express-validator');

// Middleware de validación para las operaciones de SpecialPrice
exports.validateSpecialPrice = {
    // Validación para crear y actualizar SpecialPrice
    create: [
        body('user_id')
            .isMongoId()
            .default("67b74c53ae69118039fcd20d")
            .withMessage('El ID del usuario debe ser un ID de MongoDB válido.'),
        body('product_id')
        .default("6750ef7cfce1f2f80959a98b")
            .isMongoId()
            .withMessage('El ID del producto debe ser un ID de MongoDB válido.'),
        body('special_price')
            .isDecimal()
            .withMessage('El precio especial debe ser un número decimal.'),
        body('start_date')
            .isISO8601()
            .withMessage('La fecha de inicio debe ser una fecha válida.'),
        body('end_date')
            .isISO8601()
            .withMessage('La fecha de fin debe ser una fecha válida.'),
        body('is_active')
            .optional()
            .isBoolean()
            .withMessage('El estado activo debe ser un valor booleano.'),
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        },
    ],

    update: [
        param('id')
            .isMongoId()
            .withMessage('El ID debe ser un ID de MongoDB válido.'),
        body('user_id')
            .optional()
            .isMongoId()
            .withMessage('El ID del usuario debe ser un ID de MongoDB válido.'),
        body('product_id')
            .optional()
            .isMongoId()
            .withMessage('El ID del producto debe ser un ID de MongoDB válido.'),
        body('special_price')
            .optional()
            .isDecimal()
            .withMessage('El precio especial debe ser un número decimal.'),
        body('start_date')
            .optional()
            .isISO8601()
            .withMessage('La fecha de inicio debe ser una fecha válida.'),
        body('end_date')
            .optional()
            .isISO8601()
            .withMessage('La fecha de fin debe ser una fecha válida.'),
        body('is_active')
            .optional()
            .isBoolean()
            .withMessage('El estado activo debe ser un valor booleano.'),
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        },
    ],

    // Validación para ver un SpecialPrice por ID
    findSpecialPrice: [
        param('id')
            .isMongoId()
            .withMessage('El ID debe ser un ID de MongoDB válido.'),
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        },
    ],

    // Validación para listar SpecialPrices (opcional)
    listSpecialPrices: [
        query('page')
            .optional()
            .isInt({ min: 1 })
            .withMessage('El número de página debe ser un número entero mayor que 0.'),
        query('limit')
            .optional()
            .isInt({ min: 1 })
            .withMessage('El límite debe ser un número entero mayor que 0.'),
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        },
    ],

    delete: [
        param('id')
            .isMongoId()
            .withMessage('El ID debe ser un ID de MongoDB válido.'),
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        },
    ],
};
