do {
  var numero = prompt("introduce un numero entre el 0 y el 23");
} while (!numero > 0 && numero < 23);

if (numero > 6 && numero < 11) {
  document.write(`Buenos dias.`);
}
if (numero > 12 && numero < 20) {
  document.write(`Buenas tardes.`);
}
if (numero > 6 && numero < 21) {
  document.write(`Buenos dias.`);
}
