const btnSalvar = document.querySelector('#btn-salvar');
const btnCancelar = document.querySelector('#btn-cancelar');
const toastTrigger = document.getElementById('btn-salvar')
const toastLiveExample = document.getElementById('liveToast')

function limparFormulario() {
  document.querySelector("#formulario").reset();
}

btnSalvar.addEventListener("click", (evento) => {
  evento.preventDefault();
  console.log("Fui clicado, sou o botão de salvar");  
})

btnCancelar.addEventListener("click", limparFormulario);



if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}