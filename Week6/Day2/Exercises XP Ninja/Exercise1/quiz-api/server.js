import express from 'express';
import 'dotenv/config';
import authRoutes from './server/routes/authRoutes.js';
import quizRoutes from './server/routes/quizRoutes.js';
import leaderboardRoutes from './server/routes/leaderboardRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));  // serve frontend
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

app.use((_, res) => res.status(404).json({ error: 'Route not found' }));
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});

app.listen(PORT, () =>
  console.log(`Quiz API on http://localhost:${PORT}`)
);
