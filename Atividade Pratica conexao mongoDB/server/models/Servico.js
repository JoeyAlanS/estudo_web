import mongoose from 'mongoose';

const servicoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    unique: true
  },
  descricao: {
    type: String,
    default: ''
  },
  preco: {
    type: Number,
    required: true,
    min: 0
  },
  ativo: {
    type: Boolean,
    default: true
  }
});

export default mongoose.model('Servico', servicoSchema);
