const btnEliminarAlarma = document.getElementById("btn-eliminar-alarma");
const btnCerrarModal = document.getElementById("btn-cerrar-modal");
const btnCancelarModal = document.getElementById("btn-cancelar-modal");
const btnAceptarModal = document.getElementById("btn-aceptar-modal");
const modal = document.getElementById("modal");
// const alarma_1 = document.getElementById("alarma-1");

btnEliminarAlarma.addEventListener("click", () => {
    modal.showModal();
  });

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});

btnCancelarModal.addEventListener("click", () => {
  modal.close();
});

btnAceptarModal.addEventListener("click", () => {
  modal.close();
  ocultar();
});

function ocultar(){
  document.getElementById('alarma-3').style.display = 'none';
}