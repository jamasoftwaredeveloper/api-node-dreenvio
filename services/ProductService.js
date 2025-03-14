const productRepository = require('../repositories/ProductRepository');

const getProducts = async () => {
  return await productRepository.getProducts();
};

const findProduct = async (id) => {
  const user = await productRepository.findProduct(id);
  if (!user) {
    throw new Error('Producto no encontrado');
  }
  return user;
};

module.exports = {
  getProducts,
  findProduct,
};
