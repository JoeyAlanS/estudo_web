// server/controllers/AgendamentoController.js
import Agendamento from '../models/Agendamento.js';

// const agendamentos = [
//   { id: 1, data: '2023-11-10', hora: '14:00', status: 'ativo', usuarioId: 10 },
//   { id: 2, data: '2023-11-12', hora: '09:00', status: 'concluido', usuarioId: 11 },
//   { id: 3, data: '2023-11-15', hora: '16:30', status: 'ativo', usuarioId: 12 },
//   { id: 4, data: '2023-11-20', hora: '11:50', status: 'ativo', usuarioId: 13 },
// ];

export const listarAgendamentos = async (req, res) => {
  const agendamentos = await Agendamento.find();
  res.json(agendamentos);
};

export const criarAgendamento = async (req, res) => {
  const { data, hora, status, usuarioId } = req.body;
  const novo = new Agendamento({ data, hora, status, usuarioId});
  await novo.save();
  res.status(201).send(`Dados Salvos com sucesso => Data: ${data}, Hora:${hora}`);
};

export const obterAgendamento = async (req, res) => {
  const ag = await Agendamento.findById(req.params.id);
  if (!ag) return res.status(404).json({ erro: 'Agendamento não encontrado' });
  res.json(ag);

  // console.log(req.params);
  // res.send("Obtendo...");
};

export const listarParams = async (req, res) => {
  // const ag = await Agendamento.findById(req.params.id);
  // if (!ag) return res.status(404).json({ erro: 'Agendamento não encontrado' });
  // res.json(ag);

  console.log(req.query);
  res.send("Obtendo Params...");
};
export const atualizarAgendamento = async (req, res) => {
  const {  data, hora, status, usuarioId } = req.body;
  const ag = await Agendamento.findByIdAndUpdate(req.params.id, {  data, hora, status, usuarioId }, { new: true });
  res.json(ag);
};

export const deletarAgendamento = async (req, res) => {
  await Agendamento.findByIdAndDelete(req.params.id);
  res.status(204).end();
};

