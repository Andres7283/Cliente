do {
  var num = prompt("Introduce un numero entero positivo.");
  for (let i = 0; i <= num; i++) {
    for (let j = 0; j < i; j++) {
      document.write(`* `);
    }
  }
} while (num < 1);
