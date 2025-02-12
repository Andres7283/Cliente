import { Injectable } from '@angular/core';
import { Libro } from '../model/libro';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  constructor() {}

  private libros: Libro[] = [
    { id: 1, titulo: 'Primero', autor: 'Tay' },
    { id: 2, titulo: 'Segundo', autor: 'Laura' },
    { id: 3, titulo: 'Tercero', autor: 'Vega' },
    { id: 4, titulo: 'Cuarto', autor: 'Andrés' },
  ];

  getLibros() {
    return this.libros;
  }
  añadir(nuevoLibro: Libro) {
    return this.libros.push(nuevoLibro);
  }
  modificar(libroModificado: Libro) {
    this.libros.splice(libroModificado.id - 1, 1, libroModificado);
  }
}
