const Product = require('../models/Product');

const getProducts = async () => {
  return await Product.find();
};

const findProduct = async (id) => {
  return await Product.findById(id);
};

module.exports = {
  getProducts ,
  findProduct,
};
