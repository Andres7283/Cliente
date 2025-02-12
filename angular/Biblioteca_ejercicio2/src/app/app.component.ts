import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Route } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LibrosComponent } from './libros/libros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NgModel} from '@angular/forms';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Biblioteca_ejercicio2';
}
