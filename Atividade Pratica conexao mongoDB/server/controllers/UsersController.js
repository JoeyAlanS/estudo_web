import User from '../models/User.js';

export const listarUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const criarUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ erro: 'Erro ao criar usuário', detalhe: error.message });
  }
};

export const obterUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ erro: 'Usuário não encontrado' });
  res.json(user);
};

export const atualizarUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
};

export const deletarUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
