let productos = [
  {
    nombre: "Gorra",
    precio: 30,
    categoria: { nombre: "ropa", descripcion: "Gorra amarilla." },
  },
  {
    nombre: "Camiseta",
    precio: 40,
    categoria: { nombre: "ropa", descripcion: "Camiseta de lunares." },
  },
  {
    nombre: "Pelota",
    precio: 10,
    categoria: { nombre: "deporte", descripcion: "Pelota naranja." },
  },
  {
    nombre: "Mesa",
    precio: 200,
    categoria: { nombre: "muebles", descripcion: "Mesa larga." },
  },
];
let categoriaEspecifica = productos.filter(
  (producto) => producto.categoria.nombre === "ropa"
);
console.log(categoriaEspecifica);

console.log("Productos categoria Ropa:");
categoriaEspecifica.forEach((producto) => {
  console.log(
    `Nombre ${producto.nombre}, Descripcion: ${producto.categoria.descripcion}`
  );
  console.log("---");
});
