const express = require('express');
const cors    = require('cors');
const path    = require('path');
const app     = express();
const PORT    = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

/* ─────── Emoji “DB” ─────── */
const emojis = [
  { emoji: '😀', name: 'Smile' },
  { emoji: '🐶', name: 'Dog' },
  { emoji: '🌮', name: 'Taco' },
  { emoji: '🚀', name: 'Rocket' },
  { emoji: '🎸', name: 'Guitar' },
  { emoji: '🍕', name: 'Pizza' },
  { emoji: '🐱', name: 'Cat' },
  { emoji: '🏀', name: 'Basketball' },
  { emoji: '🍣', name: 'Sushi' },
  { emoji: '🏖️', name: 'Beach' }
];

/* ─────── Runtime state ─────── */
let nextQuizId = 1;
const activeQuizzes = new Map();  // id → answer
const leaderboard   = [];         // { name, score }

/* ─────── Helpers ─────── */
function pickRandom(arr, n = 1) {
  return arr
    .map(item => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .slice(0, n)
    .map(({ item }) => item);
}

function createQuiz(numOptions = 4) {
  const answer = pickRandom(emojis)[0];
  const distractors = pickRandom(
    emojis.filter(e => e.name !== answer.name),
    numOptions - 1
  );
  const options = pickRandom([...distractors, answer], numOptions);
  const id = nextQuizId++;
  activeQuizzes.set(id.toString(), answer.name);
  return { id, emoji: answer.emoji, options: options.map(o => o.name) };
}

/* ─────── Routes ─────── */

// GET /api/quiz  → new emoji + options
app.get('/api/quiz', (_req, res) => {
  res.json(createQuiz());
});

// POST /api/guess { id, name, player }
app.post('/api/guess', (req, res) => {
  const { id, name, player = 'Anonymous' } = req.body;
  if (!id || !name) return res.status(400).json({ error: 'id & name required' });

  const answer = activeQuizzes.get(id.toString());
  if (!answer) return res.status(404).json({ error: 'Quiz not found' });

  const correct = name === answer;
  activeQuizzes.delete(id.toString());

  // update leaderboard
  if (correct) {
    const entry = leaderboard.find(e => e.player === player);
    if (entry) entry.score += 1;
    else leaderboard.push({ player, score: 1 });
    leaderboard.sort((a, b) => b.score - a.score);
  }

  res.json({ correct, answer, leaderboard: leaderboard.slice(0, 10) });
});

// GET /api/leaderboard
app.get('/api/leaderboard', (_req, res) => res.json(leaderboard.slice(0, 10)));

// Catch-alls
app.use((req, res) => res.status(404).json({ error: 'Route not found' }));

app.listen(PORT, () =>
  console.log(`Emoji game running → http://localhost:${PORT}`)
);
