let productos = [
  { nombre: "zapatos", cantidad: 100, precio: 20 },
  { nombre: "cascaos", cantidad: 20, precio: 233 },
  { nombre: "camiseta", cantidad: 50, precio: 44 },
  { nombre: "moviles", cantidad: 20, precio: 242 },
  { nombre: "chuches", cantidad: 110, precio: 2 },
];
let objetos = [];
let cont = 0;
productos.forEach((producto) => {
  objetos[cont] = {
    nombre: producto.nombre,
    valorTotal: producto.precio * producto.cantidad,
  };
  cont++;
});
objetos.forEach((producto) => {
  console.log(
    `Producto ${producto.nombre}, Valor Total: $${producto.valorTotal.toFixed(
      2
    )}`
  );
});
