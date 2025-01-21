const num = prompt("Introduce un numero entre 1 y 23");
if (num < 0 || num > 23) {
  alert("Debe estar entre 0 y 23");
}

if (num >= 6 && num <= 11) {
  document.write("Buenos dias");
}

if (num >= 12 && num <= 20) {
  document.write("Buenos tardes");
}
if (num < 6 && num <= 21) {
  document.write("Buenos noches");
}
