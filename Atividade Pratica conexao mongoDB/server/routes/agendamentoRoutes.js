// server/routes/agendamentoRoutes.js

import express from 'express';
import {
  listarAgendamentos,
  obterAgendamento,
  criarAgendamento,
  atualizarAgendamento,
  deletarAgendamento,
  listarParams
} from '../controllers/agendamentoController.js';

import {listarUsers} from '../controllers/UsersController.js';
 
const router = express.Router();


// localhost:3000/api/agendamentos/listaId/id

// router.get('/users', listarUsers);
router.get('/listarParams', listarParams);
router.get('/listarag', listarAgendamentos);
router.get('/listaId/:id', obterAgendamento);
router.post('/createAg', criarAgendamento);
router.put('/:id', atualizarAgendamento);
router.delete('/deleteAg/:id', deletarAgendamento);

// Rota inválida dentro de /agendamento/*
router.use((req, res) => {
  res.status(404).json({
    erro: 'Subrota de /agendamento não encontrada',
    caminho: req.originalUrl
  });
});


export default router;
