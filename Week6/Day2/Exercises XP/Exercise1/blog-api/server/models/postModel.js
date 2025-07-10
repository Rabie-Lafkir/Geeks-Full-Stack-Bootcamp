import db from '../config/knex.js';

export const getAll = () => db('posts').select('*');

export const getById = (id) =>
  db('posts').where({ id }).first();

export const create = ({ title, content }) =>
  db('posts')
    .insert({ title, content })
    .returning('*')
    .then((rows) => rows[0]);

export const update = (id, { title, content }) =>
  db('posts')
    .where({ id })
    .update({ title, content, updated_at: db.fn.now() })
    .returning('*')
    .then((rows) => rows[0]);

export const remove = (id) =>
  db('posts').where({ id }).del();
