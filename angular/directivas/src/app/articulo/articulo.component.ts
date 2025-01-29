import { Component, Input } from '@angular/core';
import { Articulo } from '../model/articulo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListadoArticulosComponent } from '../listado-articulos/listado-articulos.component';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [FormsModule, CommonModule, ListadoArticulosComponent],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css',
})
export class ArticuloComponent {
  nombre: string = '';
  precio: number = 0;
  unidades: number = 0;

  articulos: Articulo[] = [
    {
      nombre: 'Pelota',
      precio: 5,
      unidades: 3,
    },
    {
      nombre: 'goma',
      precio: 2,
      unidades: 1,
    },
    {
      nombre: 'Lapiz',
      precio: 3,
      unidades: 5,
    },
  ];

  nuevoArticulo: Articulo = {
    nombre: '',
    precio: 0,
    unidades: 0,
  };

  aniadir() {
    this.nuevoArticulo.nombre = this.nombre;
    this.nuevoArticulo.precio = this.precio;
    this.nuevoArticulo.unidades = this.unidades;

    this.articulos.push(this.nuevoArticulo);
  }
}
