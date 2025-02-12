import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../service/libros.service';
import { Libro } from '../model/libro';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-libro-detalle',
  standalone: true,
  imports: [],
  templateUrl: './libro-detalle.component.html',
  styleUrl: './libro-detalle.component.css',
})
export class LibroDetalleComponent implements OnInit {
  constructor(
    private libroService: LibrosService,
    private act: ActivatedRoute,
    private router: Router
  ) {}

  id: number = 0;
  l: Libro = { id: 0, titulo: '', autor: '' };

  ngOnInit(): void {
    this.id = this.act.snapshot.params['id'];
    this.l = this.libroService.getLibros()[this.id - 1];
  }
  volverLibros() {
    this.router.navigate(['/libros']);
  }
}
