/* eslint-disable unused-imports/no-unused-vars */
import bodyParser from 'body-parser';
import cors from 'cors';
import { ethers } from 'ethers';
import express, { json } from 'express';
import helmet from 'helmet';
import { generateNonce, SiweMessage } from 'siwe';

import { authenticateToken, generateAccessToken } from './authorization';
import { Submission, User } from './database';
/* --- Constants --- */
const app = express();
app.use(json());
app.use(helmet());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);
app.use(cors());

/* ------------------------------ */
// Authentication API
/* ------------------------------ */
app.get('/challenge', async (_, res, next: Function) => {
  try {
    res.setHeader('Content-Type', 'text/plain');
    const c = await generateNonce();
    res.send(c);
  } catch (error) {
    res.status(500).send(error);
    next(error);
  }
});

app.post('/authenticate', async (req, res, next: Function) => {
  const { message, signature } = req.body;
  const siweMessage = new SiweMessage(message);

  try {
    await siweMessage.validate(signature);
    const token = generateAccessToken({ address: siweMessage.address });
    res.json({ authToken: token });
  } catch (error) {
    res.status(500).send(error);
    next(error);
  }
});

/* ------------------------------ */
// Data API
/* ------------------------------ */
app.post(
  '/register',
  authenticateToken,
  async (req: any, res: any, next: Function) => {
    try {
      const { name, email, address: addressPassed } = req.body;
      const { address } = req?.user;
      if (
        ethers.utils.getAddress(address) !=
        ethers.utils.getAddress(addressPassed)
      ) {
        throw new Error('Submission:invalid-address');
      }
      const user = await User.findById(address).exec();
      if (!user) {
        const doc = new User({ _id: address, name, email });
        doc.save();
        res.status(200).send(doc);
      } else {
        res.status(200).send(user);
      }
    } catch (error) {
      res.status(500).send(error);
      next(error);
    }
  }
);

app.post(
  '/data/partner',
  authenticateToken,
  async (req: any, res: any, next: Function) => {
    try {
      const { name, email, address: addressPassed } = req.body;
      const { address } = req?.user;
      if (
        ethers.utils.getAddress(address) !=
        ethers.utils.getAddress(addressPassed)
      ) {
        throw new Error('Submission:invalid-address');
      }
      const doc = new Submission({ name, email, address, type: 'partner' });
      await doc.save();
      res.status(200).json(doc);
    } catch (error) {
      res.status(500).send(error);
      next(error);
    }
  }
);

app.post(
  '/data/institution',
  authenticateToken,
  async (req: any, res: any, next: Function) => {
    try {
      const { name, email, address: addressPassed } = req.body;
      const { address } = req?.user;
      if (
        ethers.utils.getAddress(address) !=
        ethers.utils.getAddress(addressPassed)
      ) {
        throw new Error('Submission:invalid-address');
      }
      const doc = new Submission({ name, email, address, type: 'institution' });
      doc.save();
      res.status(200).json(doc);
    } catch (error) {
      res.status(500).send(error);
      next(error);
    }
  }
);

/* ------------------------------ */
// Error Handling
/* ------------------------------ */
app.use((_, res, _next) => {
  res.status(404).json({ error: 'NOT FOUND' });
});
export { app };
