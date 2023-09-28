const btnEditarAlarma = document.getElementById("btn-editar-alarma");
const btnCerrarModal = document.getElementById("btn-cerrar-modal");
const btnCancelarModal = document.getElementById("btn-cancelar-modal");
const btnAceptarModal = document.getElementById("btn-aceptar-modal");
const modal_editar = document.getElementById("modal-editar");
// const alarma_1 = document.getElementById("alarma-1");

btnEditarAlarma.addEventListener("click", () => {
    modal_editar.showModal();
  });

btnCerrarModal.addEventListener("click", () => {
  modal_editar.close();
});

btnCancelarModal.addEventListener("click", () => {
  modal_editar.close();
});

btnAceptarModal.addEventListener("click", () => {
  modal_editar.close();
  // ocultar();
});

// function ocultar(){
//   document.getElementById('alarma-3').style.display = 'none';
// }