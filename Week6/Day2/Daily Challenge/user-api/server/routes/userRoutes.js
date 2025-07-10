import { Router } from 'express';
import * as ctrl from '../controllers/userController.js';

const router = Router();

router.post('/register', ctrl.register);
router.post('/login', ctrl.login);
router.get('/', ctrl.getUsers);
router.get('/:id', ctrl.getUser);
router.put('/:id', ctrl.updateUser);

export default router;
