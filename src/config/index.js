import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const config = {
  port: process.env.PORT || 8000,
  databaseUrl: process.env.DATABASE_URL,
  secret: process.env.SECRET,
  nodeEnv: process.env.NODE_ENV || 'development',
};

export default config;
