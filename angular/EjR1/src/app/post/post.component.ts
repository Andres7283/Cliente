import { Component } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Observable } from 'rxjs';
import { UsuarioList } from '../model/usuarioModel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  constructor(private usuarioService: UsuarioService) {}

  listaUsuarios$ = new Observable<UsuarioList[]>();

  getUsuario() {
    this.listaUsuarios$ = this.usuarioService.getListaUsuario();
    return this.listaUsuarios$;
  }
}
