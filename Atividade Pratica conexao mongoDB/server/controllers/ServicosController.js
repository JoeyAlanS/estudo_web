import Servico from '../models/Servico.js';

export const listarServicos = async (req, res) => {
  const servicos = await Servico.find();
  res.json(servicos);
};

export const criarServico = async (req, res) => {
  try {
    const servico = new Servico(req.body);
    await servico.save();
    res.status(201).json(servico);
  } catch (error) {
    res.status(400).json({ erro: 'Erro ao criar serviço', detalhe: error.message });
  }
};

export const obterServico = async (req, res) => {
  const servico = await Servico.findById(req.params.id);
  if (!servico) return res.status(404).json({ erro: 'Serviço não encontrado' });
  res.json(servico);
};

export const atualizarServico = async (req, res) => {
  const servico = await Servico.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(servico);
};

export const deletarServico = async (req, res) => {
  await Servico.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
