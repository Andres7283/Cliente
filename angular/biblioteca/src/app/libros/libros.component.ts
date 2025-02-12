import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../service/libros.service';
import { Libro } from '../model/libro';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css',
})
export class LibrosComponent implements OnInit {
  constructor(private libroService: LibrosService, private router: Router) {}

  libros = new Array<Libro>();

  ngOnInit(): void {
    this.libros = this.libroService.getLibros();
  }

  nuevoLibro() {
    this.router.navigate(['/libroNuevo']);
  }
}
