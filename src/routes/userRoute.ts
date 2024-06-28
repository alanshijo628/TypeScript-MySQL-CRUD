import express from 'express';
import { createUser, deleteUser, getAllUsers, getUser } from '../controllers/userController';

const router = express.Router();

router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:userId', getUser);
router.delete('/:userId', deleteUser);

export default router;