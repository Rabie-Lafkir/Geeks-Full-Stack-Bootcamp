import express from 'express';
import { promises as fs } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, 'data', 'users.json');

async function readUsers() {
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

async function writeUsers(users) {
  await fs.writeFile(DATA_PATH, JSON.stringify(users, null, 2));
}

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// POST /register
app.post('/register', async (req, res, next) => {
  try {
    const { firstName, lastName, email, username, password } = req.body;
    if (!firstName || !lastName || !email || !username || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const users = await readUsers();
    if (users.find(u => u.username === username)) {
      return res.status(409).json({ error: 'Username already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: uuidv4(), firstName, lastName, email, username, password: hashedPassword };
    users.push(newUser);
    await writeUsers(users);
    res.status(201).json({ message: 'Hello Your account is now created!' });
  } catch (err) {
    next(err);
  }
});

// POST /login
app.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
    const users = await readUsers();
    const user = users.find(u => u.username === username);
    if (!user) {
      return res.status(404).json({ error: 'Username is not registered' });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: 'Incorrect password' });
    }
    res.json({ message: `Hi ${username} welcome back again!` });
  } catch (err) {
    next(err);
  }
});

// GET /users
app.get('/users', async (req, res, next) => {
  try {
    const users = await readUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// GET /users/:id
app.get('/users/:id', async (req, res, next) => {
  try {
    const users = await readUsers();
    const user = users.find(u => u.id === req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// PUT /users/:id
app.put('/users/:id', async (req, res, next) => {
  try {
    const { firstName, lastName, email } = req.body;
    const users = await readUsers();
    const idx = users.findIndex(u => u.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'User not found' });
    users[idx] = { ...users[idx], ...(firstName && { firstName }), ...(lastName && { lastName }), ...(email && { email }) };
    await writeUsers(users);
    res.json(users[idx]);
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
app.listen(PORT, () => console.log('User API running on port', PORT));
