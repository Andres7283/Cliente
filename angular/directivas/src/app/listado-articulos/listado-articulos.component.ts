import { Component, Input } from '@angular/core';
import { Articulo } from '../model/articulo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-articulos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-articulos.component.html',
  styleUrl: './listado-articulos.component.css',
})
export class ListadoArticulosComponent {
  @Input()
  articulos: Articulo[] = [];
}
