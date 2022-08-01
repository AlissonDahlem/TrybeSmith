import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async registerProduct(name: string, amount: string): Promise<number> {
    const sql = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(sql, [name, amount]);
    return insertId;
  }

  public async getAll(): Promise<Product[]> {
    const sql = 'SELECT * FROM Trybesmith.Products';
    const [products] = await this.connection.execute(sql);
    return products as Product[];
  }
}