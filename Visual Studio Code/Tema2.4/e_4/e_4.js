do {
  num = prompt(`Introduce un numero para hacerle su sumatorio.`);
} while (isNaN(num) || num < 0);

let cont = parseInt(num);
let x = num - 1;
let factorial = (num) => {
  for (let index = 1; index < num; index++) {
    cont = cont + x;
    console.log(cont);
    x--;
  }
  return cont;
};
document.write(`El sumatorio de ${num} es = ${factorial(num)}`);
