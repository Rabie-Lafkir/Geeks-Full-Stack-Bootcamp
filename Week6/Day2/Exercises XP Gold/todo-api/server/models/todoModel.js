import db from '../config/knex.js';

export const getAll = () => db('tasks').select('*');

export const getById = (id) => db('tasks').where({ id }).first();

export const create = (data) =>
  db('tasks').insert(data).returning('*').then(rows => rows[0]);

export const update = (id, data) =>
  db('tasks').where({ id }).update(data).returning('*').then(rows => rows[0]);

export const remove = (id) => db('tasks').where({ id }).del();
