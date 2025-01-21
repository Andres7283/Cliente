var num = prompt(
  "Indica un numuro para mostras los 50 numeros impares siguientes"
);
var cont = 0;
for (let index = 0; index < 100; index++) {
  if (num % 2 == 0) {
    num++;
  } else {
    cont++;
    document.write(`${cont}---${num}<br>`);
    num++;
  }
}
