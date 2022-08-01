import jwt from 'jsonwebtoken';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';

require('dotenv/config');

const jwtSecret = process.env.JWT_SECRET || 'sdf65g4sdf654ag5f4hdf35H5#@SD55fg6sd54';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async registerUser(userToRegister: User): Promise<string> {
    const user = await this.model.registerUser(userToRegister);
    if (!user) {
      const error = new Error('failed');
      error.message = 'Failed to create user';
      throw error;
    }
    const { password, ...userWithoutPassword } = userToRegister;
    const token = jwt.sign(userWithoutPassword, jwtSecret, { expiresIn: '1d' });
    return token;
  }
}