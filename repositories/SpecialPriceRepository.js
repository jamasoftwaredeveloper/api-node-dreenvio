const SpecialPrice = require('../models/SpecialPrice'); // Asegúrate de que el modelo esté correctamente importado

const getAllSpecialPrices = async () => {
  return await SpecialPrice.find();
};

const createSpecialPrice = async (params) => {
  const { user_id, product_id, special_price, start_date, end_date } = params;

  const existingSpecialPrice = await SpecialPrice.findOne({
    user_id,
    product_id,
  });
  if (existingSpecialPrice) {
    throw new Error(
      'El precio especial ya existe para este usuario y producto'
    );
  }
  return await SpecialPrice.create({
    user_id,
    product_id,
    special_price,
    start_date,
    end_date,
    is_active: true,
  });
};

const updateSpecialPriceById = async (_id, params) => {
  const { special_price, start_date, end_date, is_active } = params;
  const specialPrice = await SpecialPrice.findByIdAndUpdate(
    _id,
    { special_price, start_date, end_date, is_active },
    { new: true }
  );
  if (!specialPrice) {
    throw new Error('Precio especial no encontrado');
  }
  return specialPrice;
};

const findSpecialPriceById = async (id) => {
  const specialPrice = await SpecialPrice.findById(id);
  if (!specialPrice) {
    throw new Error('Precio especial no encontrado');
  }
  return specialPrice;
};

const deleteSpecialPriceById = async (id) => {
  const specialPrice = await SpecialPrice.findByIdAndDelete(id);
  
  if (!specialPrice) {
    throw new Error('Precio especial no encontrado');
  }
  return true;
};

module.exports = {
  getAllSpecialPrices,
  createSpecialPrice,
  updateSpecialPriceById,
  findSpecialPriceById,
  deleteSpecialPriceById,
};
