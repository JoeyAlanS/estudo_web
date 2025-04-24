import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/database.js';
import agendamentoRoutes from './routes/agendamentoRoutes.js';
import userRoutes from './routes/userRoutes.js';
import servicoRoutes from './routes/servicoRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/agendamentos', agendamentoRoutes);
app.use('/api/users', userRoutes); 
app.use('/api/servicos', servicoRoutes);


app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
});
