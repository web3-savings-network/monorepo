import jwt from 'jsonwebtoken';

const TOKEN_SECRET = process.env.TOKEN_SECRET as string;

export function generateAccessToken(username: any) {
  return jwt.sign(username, TOKEN_SECRET, { expiresIn: '1800s' });
}

export function authenticateToken(req: any, res: any) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.status(401).send();
  jwt.verify(token, TOKEN_SECRET as string, (err: any, user: any) => {
    if (err) return new Error(err);
    req.user = user;
  });
}
