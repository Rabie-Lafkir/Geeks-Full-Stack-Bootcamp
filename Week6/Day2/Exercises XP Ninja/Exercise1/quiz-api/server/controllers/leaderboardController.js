import db from '../config/knex.js';

export const getLeaderboard = async (_, res, next) => {
  try {
    const board = await db('scores')
      .join('users', 'scores.user_id', 'users.id')
      .select('users.username', 'scores.score', 'scores.created_at')
      .orderBy('score', 'desc')
      .limit(10);
    res.json(board);
  } catch (err) { next(err); }
};
