import { Component, OnInit } from '@angular/core';
import { ListaPeliculasService } from '../service/lista-peliculas.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pelicula } from '../model/peliculasModel';

@Component({
  selector: 'app-lista-peliculas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-peliculas.component.html',
  styleUrl: './lista-peliculas.component.css',
})
export class ListaPeliculasComponent implements OnInit {
  constructor(private peliculasService: ListaPeliculasService) {}

  listaPeliculas$ = new Observable<Pelicula[]>();

  ngOnInit(): void {
    this.listaPeliculas$ = this.peliculasService.getListaPeliculas();
  }
}
