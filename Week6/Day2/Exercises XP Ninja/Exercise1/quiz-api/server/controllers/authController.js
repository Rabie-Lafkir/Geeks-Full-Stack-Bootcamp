import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../config/knex.js';

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret';

export const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const [user] = await db('users').insert({ username, email, password: hash }).returning('*');
    res.status(201).json({ id: user.id, username: user.username });
  } catch (err) { next(err); }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await db('users').where({ email }).first();
    if (!user || !(await bcrypt.compare(password, user.password)))
      return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '4h' });
    res.json({ token });
  } catch (err) { next(err); }
};

export const authMiddleware = (req, res, next) => {
  const header = req.headers.authorization || '';
  const token = header.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
};
