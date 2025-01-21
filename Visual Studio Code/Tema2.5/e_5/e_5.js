let palabra = prompt("Introduce una palabra");
let caracteres = palabra.toLocaleLowerCase().split("");

let vocales = ["a", "e", "i", "o", "u"];
let vocal = 0;

caracteres.forEach((letra) => {
  if (vocales.includes(letra)) {
    vocal++;
  }
});

console.log(`${palabra} tiene ${vocal} vocales.`);
document.write(`La palabra ${palabra} tiene ${vocal} vocales.`);
