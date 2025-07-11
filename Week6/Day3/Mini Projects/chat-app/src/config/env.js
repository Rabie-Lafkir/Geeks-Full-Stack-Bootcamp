import { config } from 'dotenv';
config();                 // loads values into process.env
export const {
  PORT = 3000,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  JWT_SECRET
} = process.env;
