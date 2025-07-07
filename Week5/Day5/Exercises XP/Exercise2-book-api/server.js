const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// ────── In-memory data ──────
let books = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin', publishedYear: 2008 },
  { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt', publishedYear: 1999 }
];
let nextId = 3;

// ────── Routes ──────

// READ ALL
app.get('/api/books', (req, res) => res.json(books));

// READ ONE
app.get('/api/books/:bookId', (req, res) => {
  const book = books.find(b => b.id === +req.params.bookId);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
});

// CREATE
app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;
  if (!title || !author || !publishedYear) {
    return res.status(400).json({ error: 'title, author & publishedYear required' });
  }
  const newBook = { id: nextId++, title, author, publishedYear };
  books.push(newBook);
  res.status(201).json(newBook);
});

// UPDATE (optional but handy)
app.put('/api/books/:bookId', (req, res) => {
  const book = books.find(b => b.id === +req.params.bookId);
  if (!book) return res.status(404).json({ error: 'Book not found' });

  const { title, author, publishedYear } = req.body;
  if (title) book.title = title;
  if (author) book.author = author;
  if (publishedYear) book.publishedYear = publishedYear;

  res.json(book);
});

// DELETE
app.delete('/api/books/:bookId', (req, res) => {
  const idx = books.findIndex(b => b.id === +req.params.bookId);
  if (idx === -1) return res.status(404).json({ error: 'Book not found' });

  const deleted = books.splice(idx, 1)[0];
  res.json(deleted);
});

// ────── Server ──────
app.listen(PORT, () => console.log(`Book API ready on http://localhost:${PORT}`));
