let dias = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

let cont = 0;
let diaMasLargo = "";

dias.forEach((dia) => {
  document.write(`El dia ${dia} tiene ${dia.length} letras. <br>`);
  if (dia.length > cont) {
    diaMasLargo = dia;
    cont = dia.length;
  }
});
document.write(
  `El dia mas largo es ${diaMasLargo}, y tiene ${diaMasLargo.length} letras.`
);
