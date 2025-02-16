import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibrosComponent } from './libros/libros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LibroDetalleComponent } from './libro-detalle/libro-detalle.component';
import { LibroNuevoComponent } from './libro-nuevo/libro-nuevo.component';
import { LibroModificadoComponent } from './libro-modificado/libro-modificado.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'libroDetalle/:id', component: LibroDetalleComponent },
  { path: 'libroNuevo', component: LibroNuevoComponent },
  { path: 'libroModificado/:id', component: LibroModificadoComponent },
  { path: '**', component: HomeComponent },
];
