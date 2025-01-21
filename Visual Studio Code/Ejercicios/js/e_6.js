var nombre = prompt("Escribe tu nombre completo:");
let correo = prompt("Escribe tu correo:");
// Primera forma de concatenar
document.write("<h1>" + nombre + "</h1>");
document.write("<h2>" + correo + "</h2>");
// Segunda forma de concatenar
document.write(`<h1>${nombre}</h1>`);
document.write(`<h2>${correo}</h2>`);
