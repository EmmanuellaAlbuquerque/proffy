import { Request, Response } from 'express';
import VerifySign from '../utils/VerifySign';

export default class UserController {
  async create(request: Request, response: Response) {
    const req = request.headers.authorization;
    const token = req?.split(' ')[1];

    return response.json({ token });
  }

  async index(request: Request, response: Response) {
    const req = request.headers.authorization;
    const token = req?.split(' ')[1];
    const decoded = VerifySign(token);

    return response.json({ decoded });
  }
}
