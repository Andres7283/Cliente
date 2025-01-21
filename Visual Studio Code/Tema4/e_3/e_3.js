window.addEventListener("DOMContentLoaded", (e) => {
  var div = document.getElementById("div1");
  var np = document.createElement("p");
  np.id = "p3";
  np.textContent = "Soy el primero ahora";
  div.insertBefore(np, document.getElementById("p1"));
});
