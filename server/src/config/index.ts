import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  LOCAL_MONGO_URI: process.env.LOCAL_MONGO_URI,
  CLOUD_MONGO_URI: process.env.CLOUD_MONGO_URI,
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
};
