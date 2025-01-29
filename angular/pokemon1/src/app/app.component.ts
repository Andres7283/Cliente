import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonServicesService } from './services/pokemon-services.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'pokemon1';

  pokemonList$ = new Observable<any>();
  constructor(private servicioPokemon: PokemonServicesService) {}
  ngOnInit(): void {
    this.pokemonList$ = this.servicioPokemon.getPokemonList();
    throw new Error('Method not implemented.');
  }
}
