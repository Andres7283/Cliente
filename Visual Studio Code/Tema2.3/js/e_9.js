let numAleatorio = parseInt(Math.random() * (10 - 1 + 1)) + 1;
let num = prompt(`Introduce un numero del 1 al 10`);
document.write(numAleatorio);
document.write("<br>");
if (num == numAleatorio) {
  alert("Ganaste");
} else {
  alert("fallastes");
}
