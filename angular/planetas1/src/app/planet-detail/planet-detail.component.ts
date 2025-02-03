import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Planeta } from '../model/planet';
import { PlanetasService } from '../services/planetas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planet-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planet-detail.component.html',
  styleUrl: './planet-detail.component.css',
})
export class PlanetDetailComponent implements OnInit {
  planetasDetails$ = new Observable<Planeta>();

  constructor(private servicioPlanetas: PlanetasService) {}

  ngOnInit(): void {
    this.planetasDetails$ = this.servicioPlanetas.getPlaneta();
  }
}
