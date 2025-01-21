let array = new Array[10]();
for (let index = 0; index < 10; index++) {
  let numAleatorio = parseInt(Math.random() * (20 - 0 + 1)) + 0;
  array[index] = numAleatorio;
}
document.write(array[1]);
