const btnAgregarAlarma = document.getElementById("btn-agregar-alarma");
const btnEditarAlarma = document.getElementById("btn-editar-alarma");
const btnEliminarAlarma = document.getElementById("btn-eliminar-alarma");

const btnCerrarModalAgregar = document.getElementById("btn-cerrar-modal-agregar");
const btnCerrarModal = document.getElementById("btn-cerrar-modal");
const btnCerrarModalEliminar = document.getElementById("btn-cerrar-modal-eliminar");


const btnCancelarModalAgregar = document.getElementById("btn-cancelar-modal-agregar");
const btnCancelarModal = document.getElementById("btn-cancelar-modal");
const btnCancelarModalEliminar = document.getElementById("btn-cancelar-modal-eliminar");

const btnAceptarModalAgregar = document.getElementById("btn-aceptar-modal-agregar");
const btnAceptarModal = document.getElementById("btn-aceptar-modal");
const btnAceptarModalEliminar = document.getElementById("btn-aceptar-modal-eliminar");

const modal_agregar = document.getElementById("modal-agregar")
const modal_editar = document.getElementById("modal-editar");
const modal_eliminar = document.getElementById("modal-eliminar");

btnAgregarAlarma.addEventListener("click", () => {
  modal_agregar.showModal();
});

btnEditarAlarma.addEventListener("click", () => {
    modal_editar.showModal();
});

btnEliminarAlarma.addEventListener("click", () => {
  modal_eliminar.showModal();
});

btnCerrarModalAgregar.addEventListener("click", () => {
  modal_agregar.close();
})

btnCerrarModal.addEventListener("click", () => {
  modal_editar.close();
});

btnCancelarModalAgregar.addEventListener("click", () => {
  modal_agregar.close();
});

btnCancelarModal.addEventListener("click", () => {
  modal_editar.close();
});

btnAceptarModalAgregar.addEventListener("click", () => {
  modal_agregar.close();
});

btnAceptarModal.addEventListener("click", () => {
  modal_editar.close();
});







btnEliminarAlarma.addEventListener("click", () => {
  modal_eliminar.showModal();
});

btnCerrarModalEliminar.addEventListener("click", () => {
  modal_eliminar.close();
});

btnCancelarModalEliminar.addEventListener("click", () => {
  modal_eliminar.close();
});

btnAceptarModalEliminar.addEventListener("click", () => {
  modal_eliminar.close();
  ocultar();
});

function ocultar() {
  document.getElementById("alarma-3").style.display = "none";
}