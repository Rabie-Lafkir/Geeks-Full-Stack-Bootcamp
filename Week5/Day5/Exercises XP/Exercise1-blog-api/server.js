const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());          // body-parser

// ────── In-memory “DB” ──────
let posts = [
  { id: 1, title: 'Hello World', content: 'My first post' },
  { id: 2, title: 'Express Is Cool', content: 'Second post' }
];
let nextId = 3;

// ────── Routes ──────

/**
 * GET /posts  → all posts
 */
app.get('/posts', (req, res) => res.json(posts));

/**
 * GET /posts/:id
 */
app.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === +req.params.id);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
});

/**
 * POST /posts
 */
app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'title & content required' });
  }
  const newPost = { id: nextId++, title, content };
  posts.push(newPost);
  res.status(201).json(newPost);
});

/**
 * PUT /posts/:id
 */
app.put('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === +req.params.id);
  if (!post) return res.status(404).json({ error: 'Post not found' });

  const { title, content } = req.body;
  if (title) post.title = title;
  if (content) post.content = content;

  res.json(post);
});

/**
 * DELETE /posts/:id
 */
app.delete('/posts/:id', (req, res) => {
  const idx = posts.findIndex(p => p.id === +req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Post not found' });

  const deleted = posts.splice(idx, 1)[0];
  res.json(deleted);
});

// ────── 404 & error handlers ──────
app.use((req, res) => res.status(404).json({ error: 'Route not found' }));
app.use((err, req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});

app.listen(PORT, () => console.log(`Blog API running on http://localhost:${PORT}`));
