import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ArticuloComponent } from './articulo/articulo.component';

export interface Persona {
  nombre: string;
  apellidos: string;
  edad: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, ArticuloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Alta de usuario';

  nombre: string = '';
  apellidos: string = '';
  texto: string = '';
  alta: boolean = false;

  mostrar() {
    this.texto =
      'Alta correcta del usuario ' + this.nombre + ' ' + this.apellidos;
    this.alta = true;
  }

  personas: Persona[] = [
    {
      nombre: 'Andres',
      apellidos: 'Garcia',
      edad: 20,
    },
    {
      nombre: 'Tay',
      apellidos: 'Laura',
      edad: 24,
    },
  ];
}
