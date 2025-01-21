let notas = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let estudiantes = [
  { nombre: "Andres", calificaciones: notas },
  { nombre: "Laura", calificaciones: notas },
  { nombre: "Natalia", calificaciones: notas },
  { nombre: "Vega", calificaciones: notas },
  { nombre: "Pablo", calificaciones: notas },
];
const promediosEstudiantes = estudiantes.map((estudiante) => {
  let suma = 0;
  for (let index = 0; index < estudiante.calificaciones.length; index++) {
    suma += estudiante.calificaciones[index];
  }
  let promedio = suma / estudiante.calificaciones.length;
  return { nombre: estudiante.nombre, promedio: promedio };
});

console.log("Promedio de cada estudiante");
console.log(promediosEstudiantes);

const estudiantesConPromedioMayor7 = promediosEstudiantes.filter(
  (estudiante) => estudiante.promedio > 7
);
console.log("Estudiantes con promedio superior a 7:");
estudiantesConPromedioMayor7.forEach((estudiante) =>
  console.log(estudiante.nombre)
);
