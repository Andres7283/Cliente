import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LibrosService } from '../services/libros.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Libro } from '../model/libro.model';
@Component({
  selector: 'app-libro-modificacion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './libro-modificacion.component.html',
  styleUrl: './libro-modificacion.component.css',
})
export class LibroModificacionComponent {
  constructor(private servicio: LibrosService, private router: Router, private act: ActivatedRoute) {}
  titulo: string = '';
  autor: string = '';
  id: number = 0;

  ngOnInit(): void {
    this.id = this.act.snapshot.params['id'];
  }

  libri: Libro ={id:0, titulo:"",autor:""};

  modificar() {
    this.libri={
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
  };
   this.servicio.modificarl(this.libri);
    this.router.navigate(['/libros']);
  }
  vuelve(){
    this.router.navigate(['/libros']);
  }
}
