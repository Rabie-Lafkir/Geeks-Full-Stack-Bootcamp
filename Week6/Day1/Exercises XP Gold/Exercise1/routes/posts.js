import { Router } from 'express';

const router = Router();
let posts = [];
let nextId = 1;

// GET all posts
router.get('/', (req, res) => {
  res.json(posts);
});

// GET a specific post by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
});

// POST create a new post
router.post('/', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  const newPost = {
    id: nextId++,
    title,
    content,
    timestamp: new Date().toISOString()
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT update a post by ID
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  const postIndex = posts.findIndex(p => p.id === id);

  if (postIndex === -1) return res.status(404).json({ error: 'Post not found' });
  if (!title || !content) return res.status(400).json({ error: 'Title and content are required' });

  posts[postIndex] = {
    ...posts[postIndex],
    title,
    content,
    timestamp: new Date().toISOString()
  };

  res.json(posts[postIndex]);
});

// DELETE a post by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ error: 'Post not found' });

  posts.splice(index, 1);
  res.status(204).send();
});

export default router;
