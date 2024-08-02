import { ApolloServer, AuthenticationError } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import schema from './schema';
import resolvers from './resolvers';
import models, { sequelize } from './models';
import loaders from './loaders';
import config from './config';
import { verifyToken } from './utils/auth';
import logger from './config/logger';

const app = express();

app.use(cors());
app.use(morgan('dev'));

const getMe = async (req) => {
  const token = req.headers['x-token'];
  if (token) {
    try {
      return verifyToken(token);
    } catch (error) {
      throw new AuthenticationError('Session expired, please login again');
    }
  }
};

const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs: schema,
  resolvers,
  formatError: (error) => {
    const message = error.message.replace('SequelizeValidationError: ', '').replace('Validation error: ', '');
    return {
      ...error,
      message,
    };
  },
  context: async ({ req, connection }) => {
    if (connection) {
      return {
        models,
        loaders,
      };
    }

    if (req) {
      const me = await getMe(req);
      return {
        models,
        me,
        secret: config.secret,
        loaders,
      };
    }
  },
});

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

sequelize.authenticate().then(() => {
  logger.info('Database connected successfully');
  return sequelize.sync();
}).then(() => {
  httpServer.listen(config.port, () => {
    logger.info(`Server running at http://localhost:${config.port}/graphql`);
  });
}).catch((error) => {
  logger.error('Unable to connect to the database:', error);
});
