import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../service/libros.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from '../model/libro';

@Component({
  selector: 'app-libro-modificado',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './libro-modificado.component.html',
  styleUrl: './libro-modificado.component.css',
})
export class LibroModificadoComponent implements OnInit {
  constructor(
    private librosService: LibrosService,
    private act: ActivatedRoute,
    private router: Router
  ) {}

  titulo: string = '';
  autor: string = '';
  id: number = 0;

  libro: Libro = { id: 0, titulo: '', autor: '' };

  ngOnInit(): void {
    this.id = this.act.snapshot.params['id'];
    this.libro = this.librosService.getLibros()[this.id - 1];
  }
  modificar() {
    this.libro.titulo = this.titulo;
    this.libro.autor = this.autor;
    this.librosService.modificar(this.libro);
    this.router.navigate(['/libros']);
  }
  volverLibros() {
    this.router.navigate(['/libros']);
  }
}
