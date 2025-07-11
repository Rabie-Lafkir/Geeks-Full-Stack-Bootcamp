import knex from 'knex';
import { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } from './env.js';

export const db = knex({
    client: 'pg',
    connection: { host: DB_HOST, user: DB_USER, password: DB_PASSWORD, database: DB_NAME },
    migrations: { directory: 'migrations' },
    seeds: { directory: 'seeds' }
});
