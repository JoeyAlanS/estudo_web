// agendamentos.js
// Importa CSS e JS do Bootstrap diretamente da node_modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

// Array estático que simula dados de agendamentos
export let agendamentos = [
    { id: 1, data: '2023-11-10', hora: '14:00', status: 'ativo', usuarioId: 10 },
    { id: 2, data: '2023-11-12', hora: '09:00', status: 'concluido', usuarioId: 11 },
    { id: 3, data: '2023-11-15', hora: '16:30', status: 'ativo', usuarioId: 12 },
  ];

  
  export function initAgendamentos() {
    const main = document.getElementById('conteudoPrincipal');
  
    // Injetamos um formulário acima da lista
    main.innerHTML = /*html*/`
        <h2 id="titleAgendamento">Agendamentos do Sistema</h2>
        <form id="formAgendamento" >
          <input type="hidden" id="agendamentoId" />
          <div class="row g-2">
              <div class="col-md-3">
              <label for="dataAgendamento" class="form-label">Data</label>
              <input type="date" id="dataAgendamento" class="form-control" required />
              </div>
              <div class="col-md-3">
              <label for="horaAgendamento" class="form-label">Hora</label>
              <input type="time" id="horaAgendamento" class="form-control" required />
              </div>
              <div class="col-md-3">
              <label for="statusAgendamento" class="form-label">Status</label>
              <select id="statusAgendamento" class="form-select" required>
                  <option value="ativo">Ativo</option>
                  <option value="concluido">Concluído</option>
                  <option value="cancelado">Cancelado</option>
              </select>
              </div>
              <div class="col-md-3">
              <label for="usuarioIdAgendamento" class="form-label">Usuário (ID)</label>
              <input type="number" id="usuarioIdAgendamento" class="form-control" min="1" required />
              </div>
          </div>
          <div class="mt-3">
              <button type="submit" class="btn btn-primary" id="btnSalvar">Salvar</button>
              <button type="button" class="btn btn-secondary" id="btnCancelarEdicao" style="display:none;">Cancelar Edição</button>
          </div>
        </form>
        
        <hr/>
        <div id="listaAgendamentos"></div>
    `;

    // Listeners
    document.getElementById('formAgendamento').addEventListener('submit', salvarAgendamento);
    document.getElementById('btnCancelarEdicao').addEventListener('click', cancelarEdicao);

    listarAgendamentos();
  }
  
  function listarAgendamentos() {
    const listaDiv = document.getElementById('listaAgendamentos');
    listaDiv.innerHTML = '';
  
    agendamentos.forEach((ag) => {
      const card = document.createElement('div');
      card.classList.add('card', 'mb-2');
      card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">Agendamento #${ag.id}</h5>
          <p class="card-text">
            <strong>Data:</strong> ${ag.data}<br/>
            <strong>Hora:</strong> ${ag.hora}<br/>
            <strong>Status:</strong> ${ag.status}<br/>
            <strong>Usuário ID:</strong> ${ag.usuarioId}
          </p>
          
          <a class="btn btn-warning btn-sm" id="btnEditar-${ag.id}" href="#titleAgendamento">Editar</a>
          <button class="btn btn-danger btn-sm" id="btnExcluir-${ag.id}">Excluir</button>
        </div>
      `;
      listaDiv.appendChild(card);
  
      // Ações
      card.querySelector(`#btnEditar-${ag.id}`).addEventListener('click', () => {
        carregarParaEdicao(ag.id);
      });
      card.querySelector(`#btnExcluir-${ag.id}`).addEventListener('click', () => {
        excluirAgendamento(ag.id);
      });
    });
  }

  function salvarAgendamento(event) {
    event.preventDefault();
  
    const agendamentoId = document.getElementById('agendamentoId').value;
    const data = document.getElementById('dataAgendamento').value;
    const hora = document.getElementById('horaAgendamento').value;
    const status = document.getElementById('statusAgendamento').value;
    const usuarioId = parseInt(document.getElementById('usuarioIdAgendamento').value);
  
    if (!data || !hora || !status || !usuarioId) {
      return alert('Preencha todos os campos!');
    }
  
    if (agendamentoId) {
      // Edição
      const index = agendamentos.findIndex(a => a.id === parseInt(agendamentoId));
      if (index >= 0) {
        agendamentos[index].data = data;
        agendamentos[index].hora = hora;
        agendamentos[index].status = status;
        agendamentos[index].usuarioId = usuarioId;
      }
    } else {
      // Novo
      const novoId = agendamentos.length ? Math.max(...agendamentos.map(a => a.id)) + 1 : 1;
      const novo = { id: novoId, data, hora, status, usuarioId };
      agendamentos.push(novo);
    }
  
    // Limpa form e atualiza lista
    limparFormulario();
    listarAgendamentos();
  }
  
  function carregarParaEdicao(id) {
    const ag = agendamentos.find(a => a.id === id);
    if (!ag) return alert('Agendamento não encontrado');
  
    // Preenche form
    document.getElementById('agendamentoId').value = ag.id;
    document.getElementById('dataAgendamento').value = ag.data;
    document.getElementById('horaAgendamento').value = ag.hora;
    document.getElementById('statusAgendamento').value = ag.status;
    document.getElementById('usuarioIdAgendamento').value = ag.usuarioId;
  
    // Mostra o botão "Cancelar Edição"
    document.getElementById('btnCancelarEdicao').style.display = 'inline-block';
  }
  
  function excluirAgendamento(id) {
    if (!confirm(`Deseja excluir o agendamento #${id}?`)) return;
    agendamentos = agendamentos.filter(a => a.id !== id);
    listarAgendamentos();
    limparFormulario(); 
  }
  
  function cancelarEdicao() {
    limparFormulario();
  }
  
  function limparFormulario() {
    document.getElementById('agendamentoId').value = '';
    document.getElementById('dataAgendamento').value = '';
    document.getElementById('horaAgendamento').value = '';
    document.getElementById('statusAgendamento').value = 'ativo';
    document.getElementById('usuarioIdAgendamento').value = '';
  
    document.getElementById('btnCancelarEdicao').style.display = 'none';
  }
  