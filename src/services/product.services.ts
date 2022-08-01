import connection from '../models/connection';

import ProductModel from '../models/product.model';

import Product from '../interfaces/product.interface';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async registerProduct(name: string, amount: string): Promise<number> {
    const productId = await this.model.registerProduct(name, amount);
    return productId;
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }
}