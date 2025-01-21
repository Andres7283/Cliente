let cont = 1;
let aleatorio = () => {
  for (let index = 0; index < 500; index++) {
    let numAleatorio = parseInt(Math.random() * (10000 - 1 + 1) + 1);
    console.log(numAleatorio);
    if (numAleatorio % 2 != 0) {
      document.write(`${numAleatorio} IMPAR --${cont}<br>`);
    } else {
      document.write(`${numAleatorio} PAR --${cont}<br>`);
    }
    cont++;
  }
};

aleatorio();
