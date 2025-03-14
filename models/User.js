import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
  },
  { collection: 'usuarios' }
);

module.exports = model('usuarios', userSchema);