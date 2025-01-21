var $nombre;

convertirMayus = () => {
  $nombre.value = $nombre.value.toUpperCase();

  $nombre.select(); //no es necesario, marca la palabra
};

inicio = () => {
  $nombre = document.getElementById("nombre");
  $nombre.addEventListener("blur", convertirMayus);
};

window.addEventListener("DOMContentLoaded", inicio);
