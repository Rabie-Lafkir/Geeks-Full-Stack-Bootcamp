import db from '../config/knex.js';

export const registerUser = async (userData, hashedPassword) => {
  return await db.transaction(async trx => {
    const [user] = await trx('users')
      .insert(userData)
      .returning('*');
    
    await trx('hashpwd').insert({
      username: user.username,
      password: hashedPassword
    });

    return user;
  });
};

export const getUserByUsername = (username) =>
  db('users').where({ username }).first();

export const getUserHash = (username) =>
  db('hashpwd').where({ username }).first();

export const getAllUsers = () => db('users').select('*');

export const getUserById = (id) => db('users').where({ id }).first();

export const updateUserById = (id, updates) =>
  db('users').where({ id }).update(updates).returning('*');
