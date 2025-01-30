const btnSalvar = document.querySelector('#btn-salvar');
const btnCancelar = document.querySelector('#btn-cancelar');
const btnDeletar = document.querySelector('#btn-deletar');
const btnEditar = document.querySelector('#btn-editar');
const toastTrigger = document.getElementById('btn-salvar')
const toastLiveExample = document.getElementById('liveToast')
const containerDividas = document.querySelector("#container__dividas")

function limparFormulario() {
  document.querySelector("#formulario").reset();
}

btnCancelar.addEventListener("click", limparFormulario);
btnSalvar.addEventListener("click", gerarDivida)

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

function gerarDivida() {

  const containerDividas = document.querySelector("#container-dividas")
  const descricao = document.querySelector("#input-descricao").value
  const valor = document.querySelector("#input-valor").value
  
  const conteudo = `
    <div class="d-flex align-items-center gap-5">
      <p>${descricao}</p>
      <span class="badge text-bg-warning">em aberto</span>
    </div>
    <div class="d-flex gap-2">
      <a id="btn-deletar" href="#"><i class="bi bi-trash"></i></a>
      <a id="btn-editar" href="#"><i class="bi bi-pen"></i></a>
    </div>
  `

  const divida = document.createElement("div")
  divida.innerHTML = conteudo
  containerDividas.innerHTML = conteudo
  limparFormulario()
}