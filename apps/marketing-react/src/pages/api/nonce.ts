import type { NextApiRequest, NextApiResponse } from 'next';
import { generateNonce } from 'siwe';

import { allowCors } from '@/api/cors';

async function handler(_request: NextApiRequest, _response: NextApiResponse) {
  try {
    _response.setHeader('Content-Type', 'text/plain');
    const c = generateNonce();
    _response.send(c);
  } catch (error) {
    _response.status(500).send(error);
  }
}

export default allowCors(handler);
