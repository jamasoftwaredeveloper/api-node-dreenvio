const productService = require('../services/ProductService');

export const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error al obtener productos', error: error.message });
  }
};

export const findProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await productService.findProduct(id);
    res.status(200).json(user);
  } catch (error) {
    res
      .status(error.message === 'Producto no encontrado' ? 404 : 500)
      .json({ message: error.message });
  }
};
