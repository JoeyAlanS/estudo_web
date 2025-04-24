// Importa CSS e JS do Bootstrap diretamente da node_modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

// Se tiver seu CSS adicional, importe também
// import './style.css';

// Exemplo de uso do DOM
const root = document.getElementById('app');
root.innerHTML = /*html */`
  <h1 >Bem-vindo ao Sistema de Agendamentos</h1>
  <p>Carregando layout...</p>
`;
