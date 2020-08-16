import { Request, Response } from 'express';
import db from '../database/connection';

export default class AuthenticateController {
  async create(request: Request, response: Response) {
    const bcrypt = require('bcrypt');
    var JWTTokens = require('jwt-tokens');

    const { email, password } = request.body;

    const login = await db('login').where('login.email', '=', email)

    if (login.length > 0) {
      const { name, password: hash } = login[0];

      bcrypt.compare(password, hash, function(err: Error, result: Boolean) {
        if (result) {
      
          var token = JWTTokens.createJWT({ 
            name,
            email,
            password, 
          }, {days: 5});
      
          try {
            JWTTokens.validateJWT(token);
            return response.json({ console: 'valid token', token });
          } catch (err) {
            return response.json({ console: 'faild validation', token });
          }
        } else {
          return response.json({ console: 'Senha Inválida!' });
        }
      });

    } else {
      return response.json({ console: 'Email não cadastrado. Usuário não axiste.' });
    }
  }
}
