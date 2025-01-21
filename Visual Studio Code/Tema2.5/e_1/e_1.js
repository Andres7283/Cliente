let arr = [2, 3, 4, 5, 0];
let total = 0;
let media = 0;

arr.forEach((elem) => {
  total += elem;
});
console.log(`1-  La suma de todo el array es ${total}`);

console.log(`2-  La media del array es ${total / arr.length}`);

let tripleArr = arr.map((elem) => elem * 3);

console.log(`3-  El triple del array de cada numero es ${tripleArr}`);

for (let index = 0; index < arr.length; index++) {
  arr[index] = arr[index] * 3;
}

console.log(`4-  El array modificado es ${arr}`);
