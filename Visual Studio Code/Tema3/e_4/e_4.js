let numero;
inicio = () => {
  document.getElementById("sumar").addEventListener("click", sumarNumero);
  document.getElementById("restar").addEventListener("click", restarNumero);
  document.getElementById("x").innerHTML;
};
actualizarResultado = () => {
  if (numero === 3) {
  }
};
sumarNumero = () => {
  numero = parseInt(document.getElementById("x").innerHTML);
  alert(numero++);
};
restarNumero = () => {
  document.getElementById("x").innerHTML;
};
window.addEventListener("DOMContentLoaded", inicio);
