import { Request, Response } from "express";
import db from "../database/connection";

export default class RegisterController {
  async create(request: Request, response: Response) {
    const bcrypt = require("bcrypt");

    const { password, ...rest } = request.body;
    const saltRounds = 10;

    bcrypt.hash(password, saltRounds, async function (
      err: Error,
      hash: string
    ) {
      try {
        await db("users").insert({
          ...rest,
          encryptedPassword: hash,
        });
      } catch (error) {
        return response.status(400).send();
      }

      return response.status(201).send();
    });
  }
}
