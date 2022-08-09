import { Request, Response } from 'express';
require('dotenv').config();
import jwt from 'jsonwebtoken'
const { serviceByidUser } = require('../users/users.service');

export = (req: Request, res: Response, next) => {
  
  const authHeader = req.headers.authorization;
  const parts = authHeader.split(' ');
  const [scheme, token] = parts;
  if (!authHeader || parts.length !== 2 || !/^Bearer$/i.test(scheme)) {
    return res.status(403).send({ message: 'Token não informado' });
  }

  jwt.verify(token, process.env.SECRET, async (err, decoded) => {
    const users = await serviceByidUser(decoded.id);
    if (!users || !users.id || err) {
      return res.status(403).send({ message: 'Token inválido' });
    }

    req.userId = users.id;
    return next();
  });
};
