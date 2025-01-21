let usuarios = [
  { nombre: "Andres", edad: 20 },
  { nombre: "Natalia", edad: 15 },
  { nombre: "Laura", edad: 19 },
  { nombre: "Vega", edad: 18 },
  { nombre: "Pablo", edad: 17 },
];
let cont = 0;
var nombreEdad = [];
usuarios.forEach((usuario) => {
  if (usuario.edad >= 18) {
    nombreEdad[cont] = {
      nombreEdad: usuario.nombre + " (Edad: " + usuario.edad + " años).",
    };
    cont++;
  }
});
console.log("Los usuarios mayores de edad son:");
nombreEdad.forEach((element) => {
  console.log(element.nombreEdad);
});
