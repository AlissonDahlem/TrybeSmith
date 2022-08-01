import express from 'express';

import ProductRoutes from './routes/product.route';
import UserRoutes from './routes/user.route';
import OrderRoutes from './routes/order.route';

const app = express();

app.use(express.json());
app.use(ProductRoutes);
app.use(UserRoutes);
app.use(OrderRoutes);

export default app;
