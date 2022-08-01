import { Request, Response } from 'express';
import Product from '../interfaces/product.interface';

import ProductService from '../services/product.services';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  public registerProduct = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const productId = await this.productService.registerProduct(name, amount)

    res.status(201).json({id: productId, name, amount})
  };

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    res.status(200).json(products);
  };
}