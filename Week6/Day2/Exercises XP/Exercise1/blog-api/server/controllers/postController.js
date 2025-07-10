import * as Post from '../models/postModel.js';

export const getPosts = async (_, res, next) => {
  try {
    const posts = await Post.getAll();
    res.json(posts);
  } catch (err) {
    next(err);
  }
};

export const getPost = async (req, res, next) => {
  try {
    const post = await Post.getById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    next(err);
  }
};

export const createPost = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const post = await Post.create({ title, content });
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

export const updatePost = async (req, res, next) => {
  try {
    const post = await Post.update(req.params.id, req.body);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    next(err);
  }
};

export const deletePost = async (req, res, next) => {
  try {
    const deleted = await Post.remove(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Post not found' });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
