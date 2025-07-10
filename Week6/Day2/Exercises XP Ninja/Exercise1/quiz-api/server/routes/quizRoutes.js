import { Router } from 'express';
import * as ctrl from '../controllers/quizController.js';

const router = Router();

// fetch a question with options
router.get('/:id', ctrl.getQuestion);

// submit an answer
router.post('/answer', ctrl.submitAnswer);

export default router;
