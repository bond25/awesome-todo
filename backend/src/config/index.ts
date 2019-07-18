import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

export const config = {
  server: {
    port: process.env.PORT || 3000,
  },
  db: {
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) | 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
};
