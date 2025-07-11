import express from 'express';
import { promises as fs } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_PATH = path.join(__dirname, 'data', 'tasks.json');

async function readTasks() {
  try {
    const data = await fs.readFile(DATA_PATH, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
      await fs.writeFile(DATA_PATH, '[]');
      return [];
    }
    throw err;
  }
}

async function writeTasks(tasks) {
  await fs.writeFile(DATA_PATH, JSON.stringify(tasks, null, 2));
}

const app = express();
app.use(express.json());

// GET /tasks
app.get('/tasks', async (req, res, next) => {
  try {
    const tasks = await readTasks();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

// GET /tasks/:id
app.get('/tasks/:id', async (req, res, next) => {
  try {
    const tasks = await readTasks();
    const task = tasks.find(t => t.id === req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (err) {
    next(err);
  }
});

// POST /tasks
app.post('/tasks', async (req, res, next) => {
  try {
    const { title, description = '', completed = false } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }
    const tasks = await readTasks();
    const newTask = { id: uuidv4(), title, description, completed };
    tasks.push(newTask);
    await writeTasks(tasks);
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
});

// PUT /tasks/:id
app.put('/tasks/:id', async (req, res, next) => {
  try {
    const tasks = await readTasks();
    const idx = tasks.findIndex(t => t.id === req.params.id);
    if (idx === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }
    const { title, description, completed } = req.body;
    if (title !== undefined && title.trim() === '') {
      return res.status(400).json({ error: 'Title cannot be empty' });
    }
    tasks[idx] = {
      ...tasks[idx],
      ...(title !== undefined ? { title } : {}),
      ...(description !== undefined ? { description } : {}),
      ...(completed !== undefined ? { completed } : {})
    };
    await writeTasks(tasks);
    res.json(tasks[idx]);
  } catch (err) {
    next(err);
  }
});

// DELETE /tasks/:id
app.delete('/tasks/:id', async (req, res, next) => {
  try {
    const tasks = await readTasks();
    const newTasks = tasks.filter(t => t.id !== req.params.id);
    if (newTasks.length === tasks.length) {
      return res.status(404).json({ error: 'Task not found' });
    }
    await writeTasks(newTasks);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Task API listening on port ${PORT}`);
});
