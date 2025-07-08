// routes/todos.js
import { Router } from 'express';

const router = Router();
let todos = [];
let nextId = 1;

// GET all todos
router.get('/', (req, res) => {
  res.json(todos);
});

// POST a new todo
router.post('/', (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ error: 'Task is required' });

  const newTodo = { id: nextId++, task };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT (update) a todo by ID
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { task } = req.body;

  const todo = todos.find((t) => t.id === id);
  if (!todo) return res.status(404).json({ error: 'Todo not found' });

  todo.task = task || todo.task;
  res.json(todo);
});

// DELETE a todo by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) return res.status(404).json({ error: 'Todo not found' });

  todos.splice(index, 1);
  res.status(204).send();
});

export default router;
