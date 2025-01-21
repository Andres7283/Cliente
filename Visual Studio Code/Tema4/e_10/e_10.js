function inicio() {
  var boton = document
    .getElementById("boton")
    .addEventListener("click", añadir);
  function añadir() {
    //Crear un nuevo elemento "li"
    var nElemento = document.createElement("li");

    //Añadir texto al nuevo elemento
    nElemento.textContent = "Nuevo elemento";

    //Añadir el nuevo elemento a la lista
    document.getElementById("lista").appendChild(nElemento);
  }
}

window.addEventListener("DOMContentLoaded", inicio);
