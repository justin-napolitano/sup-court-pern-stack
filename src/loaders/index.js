import DataLoader from 'dataloader';
import models from '../models';
import { batchUsers } from './user';

const loaders = {
  user: new DataLoader(keys => batchUsers(keys, models)),
};

export default loaders;
