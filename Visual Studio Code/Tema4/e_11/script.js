// Apartado A
inicio = () => {
  // Arrat con las estaciones del Año
  var estaciones = ["Primavera", "Otoño", "Verano", "Invierno"];

  // Crear título
  const titulo = document.createElement("h2");
  titulo.textContent = "Estaciones del Año";
  document.body.appendChild(titulo);

  // Crear una lista
  ul = document.createElement("ul");

  // Recorro el array
  estaciones.forEach((element) => {
    // Creo una lista para cada estacion
    li = document.createElement("li");

    // Le indico que el texto de cada li es x estacion
    li.textContent = element;

    // Uno la li a la ul principal
    ul.appendChild(li);
  });

  // Uno la ul principal al body
  document.body.appendChild(ul);
};
window.addEventListener("DOMContentLoaded", inicio);
