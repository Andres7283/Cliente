inicio = () => {
  document.getElementById("primero").addEventListener("focus", tomarfoco1);
  document.getElementById("segundo").addEventListener("focus", tomarfoco2);
  document.getElementById("primero").addEventListener("blur", perderfoco1);
  document.getElementById("segundo").addEventListener("blur", perderfoco2);
};
tomarfoco1 = () => {
  document.getElementById("primero").style.color = "red";
};
tomarfoco2 = () => {
  document.getElementById("segundo").style.color = "red";
};
perderfoco1 = () => {
  document.getElementById("primero").style.color = "black";
};
perderfoco2 = () => {
  document.getElementById("segundo").style.color = "black";
};

window.addEventListener("DOMContentLoaded", inicio);
