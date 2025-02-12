import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LibrosService } from '../services/libros.service';
@Component({
  selector: 'app-libro-detalle',
  standalone: true,
  imports: [],
  templateUrl: './libro-detalle.component.html',
  styleUrl: './libro-detalle.component.css',
})
export class LibroDetalleComponent {
  id: number = 0;
  titulo: string = '';
  autor: string = '';
  constructor(
    private router: Router,
    private act: ActivatedRoute,
    private librosService: LibrosService
  ) {} //importo el servicio xq he hecho un metodo para usarlo

  ngOnInit(): void {
    this.id = this.act.snapshot.params['id']; // Estoy cogiendo el parametro id q me pasa el libro component para la variable de la ruta

    const libro = this.librosService.getInfoLibro(this.id - 1); //Creo un libro con la info del libro q tiene ese id

    this.titulo = libro.titulo;
    this.autor = libro.autor;
  }

  vuelve() {
    this.router.navigate(['/libros']);
  }
}
