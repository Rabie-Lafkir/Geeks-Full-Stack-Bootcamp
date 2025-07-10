import * as Todo from '../models/todoModel.js';

export const getTodos = async (_, res, next) => {
  try {
    const todos = await Todo.getAll();
    res.json(todos);
  } catch (err) {
    next(err);
  }
};

export const getTodo = async (req, res, next) => {
  try {
    const todo = await Todo.getById(req.params.id);
    if (!todo) return res.status(404).json({ error: 'Todo not found' });
    res.json(todo);
  } catch (err) {
    next(err);
  }
};

export const createTodo = async (req, res, next) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });
    const newTodo = await Todo.create({ title });
    res.status(201).json(newTodo);
  } catch (err) {
    next(err);
  }
};

export const updateTodo = async (req, res, next) => {
  try {
    const updated = await Todo.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Todo not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

export const deleteTodo = async (req, res, next) => {
  try {
    const deleted = await Todo.remove(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Todo not found' });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
