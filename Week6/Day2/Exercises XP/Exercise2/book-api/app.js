import express from 'express';
import 'dotenv/config';
import bookRoutes from './server/routes/bookRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/books', bookRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () =>
  console.log(`Book API running at http://localhost:${PORT}`)
);
