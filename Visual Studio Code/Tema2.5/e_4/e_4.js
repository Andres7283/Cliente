const objetos = [
  { nombre: "balon", precio: 30, categoria: "deporte" },
  { nombre: "camisa", precio: 20, categoria: "ropa" },
  { nombre: "pala", precio: 50, categoria: "deporte" },
  { nombre: "gorra", precio: 30, categoria: "ropa" },
];

const nombresMayusculas = objetos.map((objeto) => objeto.nombre.toUpperCase());

console.log("Nombres de productos en mayusculas:");
console.log(nombresMayusculas);

document.write("<p>" + nombresMayusculas.join("-") + "<p>");
