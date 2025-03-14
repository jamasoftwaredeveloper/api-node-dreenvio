import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  stock: { type: Number, required: true },
  description: { type: String, required: true },
  brand: { type: String, required: true },
  sku: { type: String, required: true },
  tags: { type: [String], required: false },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true }
}, { collection: 'productos' });

module.exports = model('productos', productSchema);

