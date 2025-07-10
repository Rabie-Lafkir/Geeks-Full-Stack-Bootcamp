import bcrypt from 'bcrypt';
import * as User from '../models/userModel.js';

export const register = async (req, res, next) => {
  try {
    const { email, username, first_name, last_name, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);

    const user = await User.registerUser({ email, username, first_name, last_name }, hashed);
    res.status(201).json({ user });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.getUserByUsername(username);
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const hashRecord = await User.getUserHash(username);
    const match = await bcrypt.compare(password, hashRecord.password);

    if (!match) return res.status(401).json({ error: 'Invalid credentials' });

    res.json({ message: 'Login successful', user });
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (_, res, next) => {
  try {
    const users = await User.getAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const user = await User.updateUserById(req.params.id, req.body);
    res.json(user);
  } catch (err) {
    next(err);
  }
};
