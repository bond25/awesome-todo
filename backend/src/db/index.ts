import * as TypeORM from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { Container } from 'typedi';
import { join } from 'path';
import { config } from '../config';

// TypeORM DI
TypeORM.useContainer(Container);

const modelsPathDev = join(__dirname, '../models/*.model.ts');
const modelsPathProd = join(__dirname, '../models/*.model.js');

export const createDBConnection = async () => {
  const isDev = process.env.NODE_ENV === 'dev';

  const commonConnectOptions = {
    host: config.db.host,
    port: config.db.port,
    username: config.db.username,
    password: config.db.password,
    database: config.db.name,
    entities: [isDev ? modelsPathDev : modelsPathProd],
    logging: true,
    synchronize: true, // Remove in production
    namingStrategy: new SnakeNamingStrategy(),
  };

  const connectOptions = isDev
    ? {
        ...commonConnectOptions,
        logging: true,
      }
    : commonConnectOptions;

  await TypeORM.createConnection({
    type: 'postgres',
    ...connectOptions,
  });
};
