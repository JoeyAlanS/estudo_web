const form = document.getElementById('formCompromisso');
const lista = document.getElementById('listaCompromissos');
const alertPlaceholder = document.getElementById('alertPlaceholder');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;

  const hoje = new Date().toISOString().split('T')[0];

  if (!nome || !data || !hora) {
    showAlert('Preencha todos os campos.', 'warning');
    return;
  }

  if (data < hoje) {
    showAlert('A data deve ser atual ou futura.', 'danger');
    return;
  }

  const novaLinha = document.createElement('tr');
  novaLinha.innerHTML = `
    <td>${nome}</td>
    <td>${data}</td>
    <td>${hora}</td>
    <td><button class="btn btn-danger btn-sm" onclick="removerCompromisso(this)">Remover</button></td>
  `;

  lista.appendChild(novaLinha);
  showAlert('Compromisso adicionado com sucesso!', 'success');
  form.reset();
});

function removerCompromisso(botao) {
  botao.closest('tr').remove();
  showAlert('Compromisso removido com sucesso!', 'info');
}

function showAlert(message, type) {
  alertPlaceholder.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
}
