import express from 'express';
import {
  listarServicos,
  criarServico,
  obterServico,
  atualizarServico,
  deletarServico
} from '../controllers/ServicosController.js';

const router = express.Router();

router.get('/', listarServicos);
router.post('/', criarServico);
router.get('/:id', obterServico);
router.put('/:id', atualizarServico);
router.delete('/:id', deletarServico);

export default router;
