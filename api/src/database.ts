import mongoose, { Schema } from 'mongoose';

import { handleError, logError } from './errors';

const { MONGODB_CONNECTION } = process.env;

const UserSchema = new Schema({
  _id: {
    type: String,
    unique: true,
  },
  name: String,
  email: String || undefined,
  twitter: String || undefined,
  telegram: String || undefined,
});

const SubmissionSchema = new Schema({
  address: {
    type: String,
    unique: true,
  },
  name: String,
  email: String,
  type: String,
});

const User = mongoose.model('User', UserSchema);
const Submission = mongoose.model('Submission', SubmissionSchema);

mongoose.connection.on('error', (err) => {
  logError(err);
});

mongoose.connection.on('onMessage', (err) => {
  logError(err);
});

async function main() {
  try {
    const options = {
      // autoIndex: false, // Don't build indexes
      // maxPoolSize: 10, // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 10000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      // family: 4 // Use IPv4, skip trying IPv6
    };

    mongoose.connect(MONGODB_CONNECTION as string, options);
    await User.createCollection();
    await Submission.createCollection();
  } catch (error: any) {
    handleError(error);
  }
  return mongoose;
}

export { Submission, User };

export default main();
