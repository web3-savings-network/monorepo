import { ethers } from 'ethers';
import type { NextApiRequest, NextApiResponse } from 'next';

import { authenticateToken } from '@/api/authorization';
import { allowCors } from '@/api/cors';
import { User } from '@/api/database';

async function handler(_request: NextApiRequest, _response: NextApiResponse) {
  authenticateToken(_request, _response);
  try {
    const { name, email, address: addressPassed } = _request.body;
    // @ts-ignore
    const { user } = _request;
    if (!user) _response.status(500).send('User not found');
    const { address } = user;
    if (
      ethers.utils.getAddress(address) !==
      ethers.utils.getAddress(addressPassed)
    ) {
      throw new Error('Submission:invalid-address');
    }
    const userDoc = await User.findById(address).exec();
    if (!userDoc) {
      const doc = new User({
        _id: address,
        address,
        name,
        email,
      });
      doc.save();
      _response.status(200).send(doc);
    } else {
      _response.status(200).send(userDoc);
    }
  } catch (error) {
    _response.status(500).send(error);
  }
}

export default allowCors(handler);
