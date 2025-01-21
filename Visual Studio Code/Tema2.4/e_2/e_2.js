let num = prompt(`Introduce un numero para hacerle un factorial.`);
let cont = num;
let x = num - 1;
let factorial = (num) => {
  for (let index = 1; index < num; index++) {
    cont = cont * x;
    x--;
  }
  return cont;
};
document.write(`El factorial de ${num} es = ${factorial(num)}`);
