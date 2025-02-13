import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioList } from '../model/usuarioModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getUsuario(num: number): Observable<UsuarioList> {
    return this.http.get<UsuarioList>(`${this.url}/${num}`);
  }
  getListaUsuario(): Observable<UsuarioList[]> {
    return this.http.get<UsuarioList[]>(`${this.url}`);
  }
}
