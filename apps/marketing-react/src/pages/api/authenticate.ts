import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';
import { SiweMessage } from 'siwe';

import { allowCors } from '@/api/cors';

const { TOKEN_SECRET } = process.env;

export function generateAccessToken(username: any) {
  return jwt.sign(username, TOKEN_SECRET, { expiresIn: '1800s' });
}

async function handler(_request: NextApiRequest, _response: NextApiResponse) {
  const { message, signature } = _request.body;
  const siweMessage = new SiweMessage(message);

  try {
    await siweMessage.validate(signature);
    const token = generateAccessToken({ address: siweMessage.address });
    _response.json({ authToken: token });
  } catch (error) {
    _response.status(500).send(error);
  }
}

export default allowCors(handler);
