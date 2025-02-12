import { Component } from '@angular/core';
import { LibrosService } from '../services/libros.service';
import { Libro } from '../model/libro.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

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

  constructor(private servicio: LibrosService, private router: Router) {}

  libri: Libro = {
    id: 0,
    titulo: '',
    autor: '',
  };

  aniadir() {
    this.libri.titulo = this.titulo;
    this.libri.autor = this.autor;

    this.servicio.aniadir(this.libri);

    this.router.navigate(['/libros']);
    this.libri.id = this.servicio.getId();
  }

  atrasito() {
    this.router.navigate(['/libros']);
  }
}
