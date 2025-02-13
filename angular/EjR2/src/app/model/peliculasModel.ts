export interface Pelicula {
  id: number;
  titulo: string;
  actores: [
    { nombre: string; genero: string; edad: number },
    { nombre: string; genero: string; edad: number },
    { nombre: string; genero: string; edad: number },
    { nombre: string; genero: string; edad: number }
  ];
}
