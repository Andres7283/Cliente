import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { aleatorio } from '../modelo/aleatorio';

@Injectable({
  providedIn: 'root',
})
export class AleatorioService {
  private url = 'https://randomuser.me/api/';
  constructor(private http: HttpClient) {}

  getDatosAleatorio(): Observable<aleatorio> {
    return this.http.get<aleatorio>(`${this.url}`);
  }
}
