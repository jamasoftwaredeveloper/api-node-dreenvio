const specialPriceService = require('../services/SpecialPriceService');

exports.getSpecialPrices = async (req, res) => {
  try {
    const specialPrices = await specialPriceService.getSpecialPrices();
    res.status(200).json(specialPrices);
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Error al obtener precios especiales',
        error: error.message,
      });
  }
};

exports.createSpecialPrice = async (req, res) => {
  try {
    const data = req.body;
    const specialPrice = await specialPriceService.createSpecialPrice(data);
    res.status(201).json({ data: specialPrice });
  } catch (error) {
    res
      .status(error.message === 'El precio especial ya existe' ? 409 : 500)
      .json({ message: error.message });
  }
};

exports.updateSpecialPrice = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const specialPrice = await specialPriceService.updateSpecialPrice(id, data);
    res.status(200).json(specialPrice);
  } catch (error) {
    res
      .status(error.message === 'Precio especial no encontrado' ? 404 : 500)
      .json({ message: error.message });
  }
};

exports.showSpecialPrice = async (req, res) => {
  const { id } = req.params;

  try {
    const specialPrice = await specialPriceService.showSpecialPrice(id);
    res.status(200).json(specialPrice);
  } catch (error) {
    res
      .status(error.message === 'Precio especial no encontrado' ? 404 : 500)
      .json({ message: error.message });
  }
};

exports.deleteSpecialPrice = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await specialPriceService.deleteSpecialPrice(id);
    res.status(204).send(result);
  } catch (error) {
    res
      .status(error.message === 'Precio especial no encontrado' ? 404 : 500)
      .json({ message: error.message });
  }
};
