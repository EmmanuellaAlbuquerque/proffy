import { Request, Response } from 'express';
import db from '../database/connection';

export default class RegisterController {
  async index(request: Request, response: Response) {
    const bcrypt = require('bcrypt');
    const { email, password } = request.body;

    const login = await db('login').where('login.email', '=', email)
    const { password: hash } = login[0];

    bcrypt.compare(password, hash, function(err: Error, result: string) {
      return response.json({ result });
    });

    // return response.json({ password, hash });
  }
  
  async create(request: Request, response: Response) {
    const bcrypt = require('bcrypt');

    const { name, email, password } = request.body;
    const saltRounds = 10;

    bcrypt.hash(password, saltRounds, async function(err: Error, hash: string) {
      try {
        await db('login').insert({
          name,
          email,
          password: hash
        });

      } catch (error) {
        return response.status(400).send();
      }
      
      return response.status(201).send();
    });
  }
}
