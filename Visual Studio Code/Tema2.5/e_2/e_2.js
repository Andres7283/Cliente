let arr = [];
let cont = 1;
for (let index = 0; index < 3; index++) {
  let palabra = prompt(`Introduce la ${cont}ª primera palabra`);
  cont++;
  arr[index] = palabra;
}
console.log(`El array inicial creado contiene ${arr}`);
document.write(`El array inicial creado contiene ${arr}<br>`);

let cArr = arr.filter(
  (elem) => elem.slice(0, 1) == "C" || elem.slice(0, 1) == "c"
);
if (cArr.length == 0) {
  console.log("No hay ninguna palabra que comience por C.");
  document.write("No hay ninguna palabra que comience por C.");
} else {
  console.log(`El array filtrado contiene${cArr}`);
  document.write(`El array filtrado contiene ${cArr}`);
}
