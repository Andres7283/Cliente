import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../service/usuario.service';
import { UsuarioList } from '../model/usuarioModel';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
})
export class UsuarioComponent {
  constructor(private usuarioService: UsuarioService) {}

  usuarioList$ = new Observable<UsuarioList>();

  num: number = 0;

  getUsuarios() {
    this.usuarioList$ = this.usuarioService.getUsuario(this.num);
    return this.usuarioList$;
  }
}
