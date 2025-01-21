window.addEventListener("DOMContentLoaded", (e) => {
  var div = document.getElementById("div1");
  var np = document.createElement("p");
  np.textContent = "Soy el nuevo";
  np.id = "p3";
  div.appendChild(np);
});
