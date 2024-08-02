import jwt from 'jsonwebtoken';
import config from '../config';

export const createToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email, username: user.username, role: user.role }, config.secret, { expiresIn: '30m' });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, config.secret);
  } catch (error) {
    throw new Error('Session expired, please login again');
  }
};
