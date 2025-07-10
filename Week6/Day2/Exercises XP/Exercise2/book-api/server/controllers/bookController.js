import * as Book from '../models/bookModel.js';

export const getBooks = async (_, res, next) => {
  try {
    const books = await Book.getAll();
    res.json(books);
  } catch (err) {
    next(err);
  }
};

export const getBook = async (req, res, next) => {
  try {
    const book = await Book.getById(req.params.bookId);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    next(err);
  }
};

export const createBook = async (req, res, next) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    next(err);
  }
};

export const updateBook = async (req, res, next) => {
  try {
    const book = await Book.update(req.params.bookId, req.body);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    next(err);
  }
};

export const deleteBook = async (req, res, next) => {
  try {
    const deleted = await Book.remove(req.params.bookId);
    if (!deleted) return res.status(404).json({ error: 'Book not found' });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
