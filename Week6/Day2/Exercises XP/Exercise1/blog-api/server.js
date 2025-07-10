import express from 'express';
import 'dotenv/config';
import postRoutes from './server/routes/postRoutes.js';

const app   = express();
const PORT  = process.env.PORT || 3000;

// Middle-wares
app.use(express.json());

// Routes
app.use('/posts', postRoutes);

// 404 – unknown route
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
  });
// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start
app.listen(PORT, () =>
  console.log(`Blog API running on http://localhost:${PORT}`)
);
