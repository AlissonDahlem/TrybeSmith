import express from 'express';

const ProductRoutes = require('./routes/product.route')

const app = express();

app.use(express.json());
app.use(ProductRoutes)

export default app;
