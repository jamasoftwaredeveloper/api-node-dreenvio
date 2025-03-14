const mongoose = require('mongoose');

const specialPriceSchema = new mongoose.Schema({
  user_id: mongoose.Types.ObjectId,
  product_id: mongoose.Types.ObjectId,
  special_price: mongoose.Types.Decimal128,
  start_date: Date,
  end_date: Date,
  is_active: Boolean
});

const SpecialPrice = mongoose.model('SpecialPrice', specialPriceSchema);

const getAllSpecialPrices = async () => {
  return await SpecialPrice.find();
};

const createSpecialPrice = async (specialPrice) => {
  const newSpecialPrice = new SpecialPrice(specialPrice);
  return await newSpecialPrice.save();
};

const updateSpecialPriceById = async (id, specialPrice) => {
  return await SpecialPrice.findByIdAndUpdate(id, specialPrice, { new: true });
};

const findSpecialPriceById = async (id) => {
  return await SpecialPrice.findById(id);
};

const deleteSpecialPriceById = async (id) => {
  return await SpecialPrice.findByIdAndDelete(id);
};

module.exports = {
  getAllSpecialPrices,
  createSpecialPrice,
  updateSpecialPriceById,
  findSpecialPriceById,
  deleteSpecialPriceById
};
