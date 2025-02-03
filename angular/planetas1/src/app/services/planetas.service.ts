import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planeta, PlanetList } from '../model/planet';

@Injectable({
  providedIn: 'root',
})
export class PlanetasService {
  private url = 'https://swapi.dev/api/planets';
  constructor(private http: HttpClient) {}

  getPlanetasList(page: number = 1): Observable<PlanetList> {
    return this.http.get<PlanetList>(`${this.url}?page=${page}`);
  }
  getPlaneta(num: number = 1): Observable<Planeta> {
    return this.http.get<Planeta>(`${this.url}/?num=${num}`);
  }
}
