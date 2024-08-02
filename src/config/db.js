import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    logging: true,
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'postgres',
    logging: false,
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};

const environment = process.env.NODE_ENV || 'development';

export default dbConfig[environment];
