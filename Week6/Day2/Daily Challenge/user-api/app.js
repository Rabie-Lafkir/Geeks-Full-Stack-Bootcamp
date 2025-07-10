import express from 'express';
import 'dotenv/config';
import userRoutes from './server/routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/users', userRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});

app.listen(PORT, () =>
  console.log(`User API running on http://localhost:${PORT}`)
);
