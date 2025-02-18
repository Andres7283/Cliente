import { Component, OnInit } from '@angular/core';
import { AleatorioService } from '../service/aleatorio.service';
import { Observable } from 'rxjs';
import { aleatorio } from '../modelo/aleatorio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aleatorio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aleatorio.component.html',
  styleUrl: './aleatorio.component.css',
})
export class AleatorioComponent implements OnInit {
  constructor(private aleatorioService: AleatorioService) {}

  datosAleatorio$ = new Observable<aleatorio>();

  ngOnInit(): void {
    this.datosAleatorio$ = this.aleatorioService.getDatosAleatorio();
  }
}
