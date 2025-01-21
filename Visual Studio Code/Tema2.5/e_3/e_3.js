let personas = [
  { nombre: "Andres", edad: 20, ciudad: "Sevilla" },
  { nombre: "Tay", edad: 15, ciudad: "Sevilla" },
  { nombre: "Laura", edad: 19, ciudad: "Sevilla" },
  { nombre: "Pablo", edad: 18, ciudad: "Sevilla" },
  { nombre: "Vega", edad: 17, ciudad: "Sevilla" },
];

const mayoresDeEdad = personas.filter((persona) => persona.edad >= 18);
document.write("Personas mayores de edad:");
mayoresDeEdad.forEach((persona) => {
  document.write(
    `<li>Nombre: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad} </li>`
  );
});

const personasDeSevilla = personas.filter(
  (persona) => persona.ciudad === "Sevilla"
);

document.write("Personas que son de Sevilla:");

personasDeSevilla.forEach((persona) => {
  document.write(
    `<li>Nombre: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad} </li>`
  );
});
