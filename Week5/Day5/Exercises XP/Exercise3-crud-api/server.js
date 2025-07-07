const express = require('express');
const { fetchPosts } = require('./data/dataService');
const app = express();
const PORT = 5000;

// Endpoint that proxies JSONPlaceholder posts
app.get('/api/posts', async (req, res, next) => {
  try {
    const posts = await fetchPosts();
    console.log(`Fetched ${posts.length} posts from JSONPlaceholder`);
    res.json(posts);
  } catch (err) {
    next(err);
  }
});

// Basic 404 / error handlers
app.use((req, res) => res.status(404).json({ error: 'Route not found' }));
app.use((err, req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});

app.listen(PORT, () => console.log(`CRUD proxy API running on http://localhost:${PORT}`));
