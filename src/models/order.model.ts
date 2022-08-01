import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async listOrders(): Promise<Order[]> {
    const sql = `SELECT ord.id, ord.userId, JSON_ARRAYAGG(prod.id) AS productsIds
FROM Trybesmith.Orders AS ord
INNER JOIN Trybesmith.Products AS prod ON ord.id = prod.orderId
GROUP BY (ord.id)
ORDER BY ord.userId`;
    const [orders] = await this.connection.execute(sql);
    return orders as Order[];
  }
}