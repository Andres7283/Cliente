import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pelicula } from '../model/peliculasModel';

@Injectable({
  providedIn: 'root',
})
export class ListaPeliculasService {
  private url = 'assets/peliculas.json';

  constructor(private http: HttpClient) {}

  getListaPeliculas() {
    return this.http.get<Pelicula[]>(`${this.url}`);
  }
}
