const specialPriceRepository = require('../repositories/SpecialPriceRepository');

const getSpecialPrices = async () => {
  return await specialPriceRepository.getAllSpecialPrices();
};

const createSpecialPrice = async (params) => {
  return await specialPriceRepository.createSpecialPrice(params);
};

const updateSpecialPrice = async (_id, params) => {
  const specialPrice = await specialPriceRepository.updateSpecialPriceById(
    _id,
    params
  );
  if (!specialPrice) {
    throw new Error('Precio especial no encontrado');
  }
  return specialPrice;
};

const showSpecialPrice = async (id) => {
  const specialPrice = await specialPriceRepository.findSpecialPriceById(id);
  if (!specialPrice) {
    throw new Error('Precio especial no encontrado');
  }
  return specialPrice;
};

const deleteSpecialPrice = async (id) => {
  const specialPrice = await specialPriceRepository.deleteSpecialPriceById(id);
  if (!specialPrice) {
    throw new Error('Precio especial no encontrado');
  }
  return specialPrice;
};

const validateSpecialPriceUser = async (id) => {
  const specialPrice =
    await specialPriceRepository.validateSpecialPriceUser(id);
  if (!specialPrice) {
    throw new Error('El usuario no está asociado a ningun Precio especial');
  }
  return specialPrice;
};

export {
  getSpecialPrices,
  createSpecialPrice,
  updateSpecialPrice,
  showSpecialPrice,
  deleteSpecialPrice,
  validateSpecialPriceUser
};
