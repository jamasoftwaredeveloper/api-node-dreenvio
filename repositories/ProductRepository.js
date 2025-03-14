const Product = require('../models/Product');

const getProducts = async () => {
  return await Product.aggregate([
    {
      $lookup: {
        from: 'preciosEspecialesMartínez1303', // Nombre de la colección de precios especiales
        localField: '_id',
        foreignField: 'product_id',
        as: 'special_prices',
      },
    },
    {
      $addFields: {
        price: { $ifNull: [{ $arrayElemAt: ['$special_prices.special_price', 0] }, '$price'] }, // Reemplaza el precio si hay un precio especial
      },
    },
    {
      $project: {
        special_prices: 0, // No mostrar el array de precios especiales
      },
    },
  ]);
};

const findProduct = async (id) => {
  return await Product.findById(id);
};

module.exports = {
  getProducts,
  findProduct,
};
