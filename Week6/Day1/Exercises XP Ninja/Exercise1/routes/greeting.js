import { Router } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const router = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of emojis
const emojis = ["😀", "🎉", "🌟", "🎈", "👋"];

// GET /
router.get('/', (req, res) => {
  const formPath = path.join(__dirname, '../views/form.html');
  res.sendFile(formPath);
});

// POST /greet
router.post('/greet', (req, res) => {
  const { name, emoji } = req.body;

  if (!name || !emoji) {
    return res.status(400).send('<h2 style="color:red;">Please provide your name and select an emoji.</h2>');
  }

  const greetingPage = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Greeting</title>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <div class="greeting-container">
        <h1>Hello, ${name}! ${emoji}</h1>
        <a class="back-link" href="/">Back</a>
      </div>
    </body>
    </html>
  `;

  res.send(greetingPage);
});

export default router;
