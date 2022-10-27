// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken';

import { logErrors } from './logErrors';

const TOKEN_SECRET = process.env.TOKEN_SECRET as string;

export function generateAccessToken(username: any) {
  return jwt.sign(username, TOKEN_SECRET, { expiresIn: '1800s' });
}

export function authenticateToken(req: any, res: any, next: any) {
  const { IS_OFFLINE } = process.env;
  if (IS_OFFLINE) {
    req.user = { address: '0x0000000000000000000000000000000000000000' };
    next();
  } else {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    // eslint-disable-next-line consistent-return
    jwt.verify(token, TOKEN_SECRET as string, (err: any, user: any) => {
      logErrors(err);
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  }
}
