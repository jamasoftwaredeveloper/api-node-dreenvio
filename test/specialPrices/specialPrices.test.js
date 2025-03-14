// Importaciones necesarias

const mongoose = require('mongoose');

// Configurar Mongoose para aumentar el tiempo de espera
mongoose.connect(
  'mongodb+srv://drenviochallenge:m1jWly3uw42cBwp6@drenviochallenge.2efc0.mongodb.net/tienda?retryWrites=true&w=majority'
);

const specialPriceService = require('../../services/SpecialPriceService');
const productService = require('../../services/ProductService');
const userService = require('../../services/UserService');

let PRODUCT_ID;
let USER_ID;
let SPECIAL_PRICE_ID;

describe('API de precios especiales', () => {
  // Ejecutar antes de todas las pruebas
  beforeAll(async () => {
    const productsResponse = await productService.getProducts();

    const product = productsResponse[0];
    PRODUCT_ID = product._id;

    const userResponse = await userService.getUsers();
    const user = userResponse[0];
    USER_ID = user._id;
  }, 30000); // Increase timeout for beforeAll

  test('Listar todos los precios especiales', async () => {
    const response = await specialPriceService.getSpecialPrices();
    expect(response.length).toBeGreaterThanOrEqual(1); // Al menos un precio especial debería estar creado
  }, 5000);

  test('Crear precios especiales', async () => {
    // Crear un precio especial antes de las pruebas
    const response = await specialPriceService.createSpecialPrice({
      user_id: USER_ID,
      product_id: PRODUCT_ID,
      special_price: 19.99,
      start_date: new Date(),
      end_date: new Date(new Date().setMonth(new Date().getMonth() + 1)),
      is_active: true,
    });

    SPECIAL_PRICE_ID = response._id;
  }, 5000);

  test('Actualizar un precio especial', async () => {
    const response = await specialPriceService.updateSpecialPrice(
      SPECIAL_PRICE_ID,
      {
        user_id: USER_ID,
        product_id: PRODUCT_ID, // Assuming product_id is the same for testing purposes
        special_price: 24.99,
        start_date: new Date(),
        end_date: new Date(new Date().setMonth(new Date().getMonth() + 1)),
        is_active: true,
      }
    );

    expect(response).toMatchObject({
      _id: expect.any(mongoose.Types.ObjectId),
      user_id: expect.any(mongoose.Types.ObjectId),
      product_id: expect.any(mongoose.Types.ObjectId),
      special_price: expect.any(mongoose.Types.Decimal128),
      start_date: expect.any(Date),
      end_date: expect.any(Date),
      is_active: true,
      __v: expect.any(Number),
    });
  }, 5000);

  test('Ver un precio especial', async () => {
    const response =
      await specialPriceService.showSpecialPrice(SPECIAL_PRICE_ID);
    expect(response).toMatchObject({
      _id: expect.any(mongoose.Types.ObjectId),
      user_id: expect.any(mongoose.Types.ObjectId),
      product_id: expect.any(mongoose.Types.ObjectId),
      special_price: expect.any(mongoose.Types.Decimal128),
      start_date: expect.any(Date),
      end_date: expect.any(Date),
      is_active: true,
      __v: expect.any(Number),
    });
  }, 5000);

  test('Eliminar un precio especial', async () => {
    const response =
      await specialPriceService.deleteSpecialPrice(SPECIAL_PRICE_ID);

    expect(response).toBe(true);
  }, 5000);
}, 30000);
