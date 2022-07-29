import { Pool } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const sql = 'SELECT * FROM Trybesmith.Products';
    const [products] = await this.connection.execute(sql);
    return products as Product[];
  }
}