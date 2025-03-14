import dotenv from 'dotenv';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import cors from 'cors';
import { connectDB } from '../config/db';
import userRoutes from '../routes/UserRoutes';
import productRoutes from '../routes/ProductRoutes'; // Update this line
import specialPriceRoutes from '../routes/SpecialPriceRoutes'; // Update this line
import errorHandler from '../middlewares/errorHandler';
import logger from '../utils/logger';

const app = express();
dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});


app.use('/api/v1/users', userRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/special-prices', specialPriceRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentación de la API',
    },
  },
  apis: ['./routes/*.js'], // Rutas donde están tus comentarios de documentación
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
