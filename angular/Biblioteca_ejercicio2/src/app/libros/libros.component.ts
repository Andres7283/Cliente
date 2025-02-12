import { Component } from '@angular/core';
import { LibrosService } from '../services/libros.service';
import { Libro } from '../model/libro.model';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { LibroDetalleComponent } from '../libro-detalle/libro-detalle.component';
import { LibroNuevoComponent } from '../libro-nuevo/libro-nuevo.component';
import { LibroModificacionComponent } from '../libro-modificacion/libro-modificacion.component';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css',
})
export class LibrosComponent {
  constructor(private librosService: LibrosService, private router: Router) {}

  libros = new Array<Libro>();
  ngOnInit(): void {
    this.libros = this.librosService.getLibros();
    this.router.navigate(['/libroDetalle']); //aqui me va a llevar cuando use el routerLink? no entiendo pa q lo pongo dos veces
  }

  add() {
    this.router.navigate(['/addLibro']);
  }
}
