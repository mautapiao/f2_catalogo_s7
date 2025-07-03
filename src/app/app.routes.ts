import { Routes } from '@angular/router';

import { JuegosEstrategiaComponent } from './juegos-estrategia/juegos-estrategia.component';
import { JuegosFamiliaresComponent } from './juegos-familiares/juegos-familiares.component';
import { JuegosCooperativosComponent } from './juegos-cooperativos/juegos-cooperativos.component';
import { JuegosPartyComponent } from './juegos-party/juegos-party.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { DetalleJuegoComponent } from './components/detalle-juego/detalle-juego.component';

export const routes: Routes = [
  { path: '', redirectTo: 'juegos-estrategia', pathMatch: 'full' },
  { path: 'juegos-estrategia', component: JuegosEstrategiaComponent },
  { path: 'juegos-familiares', component: JuegosFamiliaresComponent },
  { path: 'juegos-cooperativos', component: JuegosCooperativosComponent},
  { path: 'juegos-party',component: JuegosPartyComponent},
  { path: 'registro-cliente', component: RegistroClienteComponent},
  { path: 'detalle/:id', component: DetalleJuegoComponent }
];
