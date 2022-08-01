import { Request, Response } from 'express';

import OrderService from '../services/order.services';

export default class OrderController {
  constructor(private orderService = new OrderService()) { }

  public listOrders = async (_req: Request, res: Response) => {
    const orders = await this.orderService.listOrders();

    res.status(200).json(orders);
  };
}