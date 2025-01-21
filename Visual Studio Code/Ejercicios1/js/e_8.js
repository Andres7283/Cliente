var num = prompt("Introduce un numero");
num = Number(num);
if (isNaN(num)) {
  alert("no es un numero");
} else {
  alert(typeof num);
}
