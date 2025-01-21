let palabra = prompt("Introduce una palabra para invertirla");

let splitPalabra = palabra.split("");
document.write(
  `La palabra original es ${palabra} y la invertida es ${splitPalabra
    .reverse()
    .join("")}.`
);
