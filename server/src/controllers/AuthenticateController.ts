import { Request, Response } from "express";
import db from "../database/connection";
import VerifySign from "../utils/VerifySign";

export default class AuthenticateController {
  async create(request: Request, response: Response) {
    const bcrypt = require("bcrypt");
    var JWTTokens = require("jwt-tokens");

    const { email, password } = request.body;

    const login = await db("login_data").where("login_data.email", "=", email);

    if (login.length > 0) {
      const { fullname, encryptedPassword: hash } = login[0];

      bcrypt.compare(password, hash, function (err: Error, result: Boolean) {
        if (result) {
          var token = JWTTokens.createJWT(
            {
              fullname,
              email,
              password,
            },
            { days: 5 }
          );

          try {
            JWTTokens.validateJWT(token);
            // const decoded = VerifySign(token);
            // return response.json({ decoded });
            return response.json({ valid_token: true, token });
          } catch (err) {
            return response.json({ valid_token: false, token });
          }
        } else {
          return response.json({ password: false });
        }
      });
    } else {
      return response.json({
        // Email não cadastrado. Usuário não existe.
        email: false,
      });
    }
  }
}
