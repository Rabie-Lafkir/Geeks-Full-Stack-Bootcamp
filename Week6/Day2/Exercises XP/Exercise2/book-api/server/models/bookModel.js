import db from '../config/knex.js';

export const getAll = () => db('books').select('*');

export const getById = (id) =>
  db('books').where({ id }).first();

export const create = (data) =>
  db('books').insert(data).returning('*').then(rows => rows[0]);

export const update = (id, data) =>
  db('books').where({ id }).update(data).returning('*').then(rows => rows[0]);

export const remove = (id) =>
  db('books').where({ id }).del();
