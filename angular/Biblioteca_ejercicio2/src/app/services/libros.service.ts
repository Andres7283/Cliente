import { Injectable } from '@angular/core';
import { Libro } from '../model/libro.model';
@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  constructor() {}

  private libros: Libro[] = [
    { id: 1, titulo: 'Harry Potter', autor: 'JK Rowling' },
    { id: 2, titulo: 'The new rules', autor: 'Margarita Nazarenko' },
    { id: 3, titulo: 'ACOTAR', autor: 'Emily Something' },
    { id: 4, titulo: 'Pride and Prejudice', autor: 'Jane Austin' },
  ];

  getLibros() {
    return this.libros;
  }

  getInfoLibro(i: any) {
    return this.libros[i];
  }

  getId(): number {
    return this.libros.length;
  }
  aniadir(l: Libro) {
    this.libros.push(l);
  }
  modificarl(libroModif: Libro){
    this.libros.splice(libroModif.id-1, 1, libroModif);
  }
}
