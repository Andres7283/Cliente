import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LibrosComponent } from './libros/libros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LibroDetalleComponent } from './libro-detalle/libro-detalle.component';
import { LibroNuevoComponent } from './libro-nuevo/libro-nuevo.component';
import { LibroModificacionComponent } from './libro-modificacion/libro-modificacion.component';
export const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'home', component: HomeComponentComponent },
  { path: 'libroDetalle/:id', component: LibroDetalleComponent },
  { path: 'addLibro', component: LibroNuevoComponent },
  { path: 'modifico/:id', component: LibroModificacionComponent },
];
