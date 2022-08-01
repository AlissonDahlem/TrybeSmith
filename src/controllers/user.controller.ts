import { Request, Response } from 'express';
// import User from '../interfaces/user.interface';
import UserService from '../services/user.service';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public registerUser = async (req: Request, res: Response) => {
    const token = await this.userService.registerUser(req.body);

    res.status(201).json({ token });
  };
}