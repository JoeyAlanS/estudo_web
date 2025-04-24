import express from 'express';
import {
  listarUsers,
  criarUser,
  obterUser,
  atualizarUser,
  deletarUser
} from '../controllers/UsersController.js';

const router = express.Router();

router.get('/', listarUsers);
router.post('/', criarUser);
router.get('/:id', obterUser);
router.put('/:id', atualizarUser);
router.delete('/:id', deletarUser);

export default router;
