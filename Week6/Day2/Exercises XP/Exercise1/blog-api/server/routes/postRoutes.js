import { Router } from 'express';
import * as ctrl from '../controllers/postController.js';

const router = Router();

router
  .route('/')
  .get(ctrl.getPosts)
  .post(ctrl.createPost);

router
  .route('/:id')
  .get(ctrl.getPost)
  .put(ctrl.updatePost)
  .delete(ctrl.deletePost);

export default router;
