import express from 'express';

import ProductRoutes from './routes/product.route';

const app = express();

app.use(express.json());
app.use(ProductRoutes);

export default app;
