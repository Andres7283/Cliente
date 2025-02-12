import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../service/libros.service';
import { Libro } from '../model/libro';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libro-nuevo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './libro-nuevo.component.html',
  styleUrl: './libro-nuevo.component.css',
})
export class LibroNuevoComponent {
  titulo: string = '';
  autor: string = '';

  constructor(private librosService: LibrosService, private router: Router) {}

  libro: Libro = { id: 0, titulo: '', autor: '' };
  ultimoLibro: number = 0;

  add(): void {
    this.ultimoLibro = this.librosService.getLibros().length;
    this.libro.id = this.ultimoLibro + 1;
    this.libro.titulo = this.titulo;
    this.libro.autor = this.autor;
    this.librosService.añadir(this.libro);

    this.router.navigate(['libros']);
  }

  volverLibros() {
    this.router.navigate(['/libros']);
  }
}
