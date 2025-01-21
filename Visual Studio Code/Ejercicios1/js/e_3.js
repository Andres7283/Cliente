var helado = 1.9;
var oreo = 1;
var kitkat = 1.5;
var brownie = 0.75;
var lacasitos = 0.95;
var topping = prompt(
  "Introduce el tipo de topping que queires ponerle a tu helado."
);
topping = topping.toLowerCase;
if (topping == "oreo") {
  document.write(`Tu helado con el topping incluido cuesta ${helado + oreo}`);
}
if (topping == "kitkat") {
  document.write(`Tu helado con el topping incluido cuesta ${helado + kitkat}`);
}
if (topping == "brownie") {
  document.write(
    `Tu helado con el topping incluido cuesta ${helado + brownie}`
  );
}
if (topping == "lacasiitos") {
  document.write(
    `Tu helado con el topping incluido cuesta ${helado + lacasitos}`
  );
} else {
  document.write(
    `No temenemos este topping, lo sentimos.<br> 
    El precio del helado sin toping es de ${helado}`
  );
}
