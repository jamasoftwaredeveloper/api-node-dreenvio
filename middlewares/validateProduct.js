const { body, param, query, validationResult } = require('express-validator');

// Middleware de validación para las operaciones de usuario
export const validateProduct = {

  // Validación para listar usuarios (opcional)
  listProducts: [
    query('page')
      .optional()
      .isInt({ min: 1 })
      .withMessage(
        'El número de página debe ser un número entero mayor que 0.'
      ),
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
};
