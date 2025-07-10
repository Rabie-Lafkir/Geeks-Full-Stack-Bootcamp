import { Router } from 'express';
import * as ctrl from '../controllers/bookController.js';

const router = Router();

router.get('/', ctrl.getBooks);
router.get('/:bookId', ctrl.getBook);
router.post('/', ctrl.createBook);
router.put('/:bookId', ctrl.updateBook);
router.delete('/:bookId', ctrl.deleteBook);

export default router;
