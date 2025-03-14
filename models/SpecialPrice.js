import { Schema, model } from 'mongoose';

const SpecialPrice = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, auto: true },
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'usuarios',
    },
    product_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'productos',
    },
    special_price: { type: Schema.Types.Decimal128, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    is_active: { type: Boolean, default: true },
  },
  { collection: 'preciosEspecialesMartínez1303' }
);

SpecialPrice.index({ user_id: 1, product_id: 1 });

module.exports = model('preciosEspecialesMartínez1303', SpecialPrice);
