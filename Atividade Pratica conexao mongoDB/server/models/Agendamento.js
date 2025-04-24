// server/models/Agendamento.js
import mongoose from 'mongoose';

const agendamentoSchema = new mongoose.Schema({
  data: {
    type: String, 
    required:true},
  hora:{ 
    type: String, 
    required:true},
  usuarioId: {
    type: String, 
    required:true, 
    unique:true
  },
  status: {
    type:String, 
    required:true
  }
});

export default mongoose.model('Agendamento', agendamentoSchema);

