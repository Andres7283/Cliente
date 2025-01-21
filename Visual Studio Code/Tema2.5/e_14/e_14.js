let libros = [
  { titulo: "Primero", numeroPag: 100 },
  { titulo: "Segundo", numeroPag: 200 },
  { titulo: "Tercero", numeroPag: 301 },
  { titulo: "Cuarto", numeroPag: 400 },
  { titulo: "Quinto", numeroPag: 500 },
  { titulo: "Sexto", numeroPag: 600 },
];
let librosMas300 = [];
let cont = 0;
libros.forEach((libro) => {
  if (libro.numeroPag > 300) {
    librosMas300[cont] = libro.titulo;
    cont++;
  }
});
console.log("Los titulos de los libros con mas de 300 paginas son: ");
librosMas300.forEach((titulo) => {
  console.log(titulo);
});
