import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async registerUser(userToRegister: User): Promise<boolean> {
    const { username, classe, level, password } = userToRegister;
    const sql = `INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?)`;
    const [{ affectedRows }] = await this.connection.execute<ResultSetHeader>(
      sql,
      [username, classe, level, password],
    );

    return !!affectedRows;
  }
}