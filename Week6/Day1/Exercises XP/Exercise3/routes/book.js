import { Router } from 'express';

const booksRouter = Router();
let books = [];
let nextId = 1;

// GET all books
booksRouter.get('/', (req, res) => {
  res.json(books);
});

// GET book by ID
booksRouter.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
});

// POST a new book
booksRouter.post('/', (req, res) => {
  const { title, author, year } = req.body;
  if (!title || !author || !year) {
    return res.status(400).json({ error: 'Title, author, and year are required' });
  }

  const newBook = { id: nextId++, title, author, year };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT update book by ID
booksRouter.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author, year } = req.body;

  const bookIndex = books.findIndex(b => b.id === id);
  if (bookIndex === -1) return res.status(404).json({ error: 'Book not found' });

  if (!title || !author || !year) {
    return res.status(400).json({ error: 'Title, author, and year are required' });
  }

  books[bookIndex] = { id, title, author, year };
  res.json(books[bookIndex]);
});

// DELETE book by ID
booksRouter.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return res.status(404).json({ error: 'Book not found' });

  books.splice(index, 1);
  res.status(204).send();
});

// Search by author
booksRouter.get('/search/by-author', (req, res) => {
  const { author } = req.query;
  if (!author) return res.status(400).json({ error: 'Author query is required' });

  const results = books.filter(b => b.author.toLowerCase().includes(author.toLowerCase()));
  res.json(results);
});

export default booksRouter;
