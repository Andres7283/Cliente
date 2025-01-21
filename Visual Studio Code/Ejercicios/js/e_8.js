var precio = prompt("Introduzca el precio:");
var cantidad = prompt("Introduzca la cantidad:");
var p = parseFloat(precio);
var c = parseFloat(cantidad);
var total = precio * cantidad;
document.write(`El total que debe abonar es de ${total.toFixed(2)} €`);
