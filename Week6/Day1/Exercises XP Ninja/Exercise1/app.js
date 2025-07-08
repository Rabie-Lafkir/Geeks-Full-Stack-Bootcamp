import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import greetingRouter from './routes/greeting.js';

const app = express();
const PORT = 3000;

// Path handling
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', greetingRouter);

app.listen(PORT, () => {
  console.log(`🌐 Server is running at http://localhost:${PORT}`);
});
