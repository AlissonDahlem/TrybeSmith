import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const router = Router();

const productsController = new ProductController();

router.get('/products', productsController.getAll);

export default router;