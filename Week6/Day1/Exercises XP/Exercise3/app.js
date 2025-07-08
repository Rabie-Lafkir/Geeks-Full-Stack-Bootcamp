import express from 'express';
import booksRouter from './routes/book.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/books', booksRouter);

app.listen(PORT, () => {
  console.log(`📚 Book API running at http://localhost:${PORT}`);
});
