import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanetasService } from '../services/planetas.service';
import { PlanetList } from '../model/planet';

@Component({
  selector: 'app-planet-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planet-list.component.html',
  styleUrl: './planet-list.component.css',
})
export class PlanetListComponent implements OnInit {
  planetasList$ = new Observable<PlanetList>();

  constructor(private servicioPlanetas: PlanetasService) {}

  ngOnInit(): void {
    this.planetasList$ = this.servicioPlanetas.getPlanetasList();
  }
}
