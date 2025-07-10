import { Router } from 'express';
import * as ctrl from '../controllers/todoController.js';

const router = Router();

router.get('/', ctrl.getTodos);
router.get('/:id', ctrl.getTodo);
router.post('/', ctrl.createTodo);
router.put('/:id', ctrl.updateTodo);
router.delete('/:id', ctrl.deleteTodo);

export default router;
