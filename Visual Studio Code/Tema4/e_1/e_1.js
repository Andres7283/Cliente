window.addEventListener("DOMContentLoaded", (e) => {
  var div = document.getElementById("myDIV");
  var contenido = div.getElementsByTagName("p");
  contenido[0].style.backgroundColor = "yellow";
  contenido[1].style.backgroundColor = "orange";
  for (let i = 0; i < contenido.length; i++) {
    contenido[i] = contenido[i].style.color = "red";
  }
});
