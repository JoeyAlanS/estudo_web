// Importa CSS e JS do Bootstrap diretamente da node_modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

//agendamentos.js
import { initAgendamentos } from './agendamentos.js';

// Exemplo de layout (bootstrap) no main.js
const root = document.getElementById('app');

root.innerHTML = /*html*/`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand ms-3" href="#">Sistema de Agendamentos</a>
  <button 
    class="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarNav"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse ms-3" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link" href="#" id="linkDashboard">Dashboard</a></li>
      <li class="nav-item"><a class="nav-link" href="#" id="linkAgendamentos">Agendamentos</a></li>
      <li class="nav-item"><a class="nav-link" href="#" id="linkUsuarios">Usuários</a></li>
    </ul>
  </div>
</nav>

<div class="container-fluid">
  <div class="row">
    <!-- Se quisermos sidebar fixa, outro approach -->
    <main class="col p-4" id="conteudoPrincipal">
      <!-- Aqui vamos injetar telas específicas -->
      <h2>Bem-vindo ao Dashboard</h2>
      <p>Selecione uma das opções no menu.</p>
    </main>
  </div>
</div>
`;

const linkDashboard = document.getElementById('linkDashboard');
const linkAgendamentos = document.getElementById('linkAgendamentos');
const linkUsuarios = document.getElementById('linkUsuarios');

linkDashboard.addEventListener('click', (e) => {
  e.preventDefault();
  carregarDashboard();
});

linkAgendamentos.addEventListener('click', (e) => {
  e.preventDefault();
  initAgendamentos(); 

});

linkUsuarios.addEventListener('click', (e) => {
  e.preventDefault();
  carregarUsuarios();
});

const data_dashboard = [
  {date: "10/02/2023",
    hora:"10:11",
    status:"ativo",
    id_user:"123"
  }
];
const data_info = {
  ativo:10,
  concluido: 20,
  cancelado: 30,
  users: 2000
};
function carregarDashboard() {
  const main = document.getElementById('conteudoPrincipal');
  main.innerHTML = /*html*/`
    <h2>Dashboard do Agendamento</h2>
    <div class="row">
      <div class="col-4">
        <div class="card text-bg-info mb-3">
          <div class="card-header">Agendamentos Ativos</div>
          <div class="card-body">
            <h5 class="card-title" id="agendamentosAtivosCount">${data_info.ativo}</h5>
          </div>
        </div>
      </div> <!--Fim -->
      <div class="col-4">
        <div class="card text-bg-success mb-3">
          <div class="card-header">Concluídos</div>
          <div class="card-body">
            <h5 class="card-title" id="agendamentosConcluidosCount">${data_info.concluido}</h5>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card text-bg-danger mb-3">
          <div class="card-header">Agendamentos Cancelados</div>
          <div class="card-body">
            <h5 class="card-title" id="canceladosCount">${data_info.cancelado}</h5>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="card text-bg-warning mb-3">
          <div class="card-header">Usuários Cadastrados</div>
          <div class="card-body">
            <h5 class="card-title" id="canceladosCount">0</h5>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="card text-bg-primary mb-3">
          <div class="card-header">Usuários Cancelados</div>
          <div class="card-body">
            <h5 class="card-title" id="canceladosCount">0</h5>
          </div>
        </div>
      </div>
      
    </div>
  `;
  carregarEstatisticas(); // Função que puxa dados do back e exibe
}

function carregarEstatisticas(){
  console.log("Carregando.....")
}
function carregarUsuarios() {
  const main = document.getElementById('conteudoPrincipal');
  main.innerHTML = `
    <h2>Gerenciar Usuários</h2>
    <button class="btn btn-success mb-3" id="btnNovoUsuario">Novo Usuário</button>
    <div id="listaUsuarios"></div>
  `;
  listarUsuarios();
}

// Carrega a aba "Dashboard" ao iniciar
// carregarDashboard();




//listarAgendamentos(), listarUsuarios(), e carregarEstatisticas() 

// Exemplo: listarAgendamentos()
const API_BASE = 'http://localhost:3000/api'; // Ajuste se necessário


async function listarAgendamentos() {
  try {
    const resp = await fetch(`${API_BASE}/agendamentos`);
    if (!resp.ok) {
      throw new Error(`Erro ao listar agendamentos: ${resp.status}`);
    }

    const agendamentos = await resp.json();
    const listaDiv = document.getElementById('listaAgendamentos');
    listaDiv.innerHTML = ''; // limpa antes

    agendamentos.forEach((ag) => {
      // Card de exemplo (poderia ser um <tr> de tabela, etc.)
      const card = document.createElement('div');
      card.classList.add('card', 'mb-2');
      card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">Agendamento #${ag.id}</h5>
          <p class="card-text">
            Data: <strong>${ag.data}</strong><br/>
            Hora: <strong>${ag.hora}</strong><br/>
            Status: <strong>${ag.status}</strong><br/>
            ${ag.Usuario 
              ? `Usuário: <strong>${ag.Usuario.nome}</strong> (ID: ${ag.Usuario.id})`
              : 'Usuário não encontrado'
            }
          </p>
          <button class="btn btn-warning btn-sm" onclick="editarAgendamento(${ag.id})">Editar</button>
          <button class="btn btn-danger btn-sm" onclick="excluirAgendamento(${ag.id})">Excluir</button>
        </div>
      `;
      listaDiv.appendChild(card);
    });
  } catch (error) {
    console.error('Erro ao listar agendamentos:', error);
  }
}


function listarUsuarios() {
    // JSON estático (poderia vir de um arquivo local ou estar definido no próprio código)
    const usuarios = [
      { id: 1, nome: 'Fulano', email: 'fulano@example.com' },
      { id: 2, nome: 'Ciclano', email: 'ciclano@example.com' },
      { id: 3, nome: 'Beltrano', email: 'beltrano@example.com' },
    ];
  
    // Supondo que exista uma div com id="listaUsuarios" no HTML
    const listaDiv = document.getElementById('listaUsuarios');
    listaDiv.innerHTML = ''; // limpa qualquer conteúdo anterior
  
    usuarios.forEach((user) => {
      const card = document.createElement('div');
      card.classList.add('card', 'mb-2');
  
      // Exemplo: exibindo dados em formato de card Bootstrap
      card.innerHTML =/*html */ `
        <div class="card-body">
          <h5 class="card-title">Usuário #${user.id}</h5>
          <p class="card-text">
            Nome: <strong>${user.nome}</strong><br/>
            E-mail: <strong>${user.email}</strong>
          </p>
          <!-- Se quiser ações, por exemplo: -->
          <button class="btn btn-warning btn-sm" id="btn-editar-user">Editar</button>
          <button class="btn btn-danger btn-sm" id="btn-excluir-user">Excluir</button>
        </div>
      `;
  
      listaDiv.appendChild(card);
    });
  }
  