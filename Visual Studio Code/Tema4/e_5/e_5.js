window.addEventListener("DOMContentLoaded", (e) => {
  var contenido = document.getElementsByTagName("p");
  var np = document.createElement("p");
  np.textContent = "Reemplazado";
  document.body.replaceChild(np, contenido[0]);
});
