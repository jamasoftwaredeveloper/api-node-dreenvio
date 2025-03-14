const SpecialPrice = require('../models/SpecialPrice'); // Asegúrate de que el modelo esté correctamente importado
const getAllSpecialPrices = async () => {
  const specialPrices = await SpecialPrice.find()
    .populate('user_id', 'name lastName') // Solo traer 'name' y 'lastname' del usuario
    .populate('product_id', 'name price') // Solo traer 'name' y 'price' del producto
    .lean(); // Convierte el resultado en objetos JavaScript planos

  return specialPrices.map(({ product_id, user_id, ...rest }) => ({
    ...rest,
    product: product_id,
    user: {
      ...user_id,
      fullName: `${user_id.name} ${user_id.lastName}`, // Concatenar name y lastName como fullName
    }, // Renombramos 'product_id' a 'product'
  }));
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
  console.log("id",_id);
  console.log("params",params);
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
