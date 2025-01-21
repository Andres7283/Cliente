let num = 3;
function cuadradoTradicional(num) {
  return num * num;
}
let cuadradoAnonimo = function (num) {
  return num * num;
};
let cuadradoFlecha = (num) => {
  return num * num;
};
document.write(`Funcion Tradicional = ${cuadradoTradicional(num)} <br>`);
document.write(`Funcion Anonima = ${cuadradoAnonimo(num)} <br>`);
document.write(`Funcion Flecha = ${cuadradoFlecha(num)}`);
