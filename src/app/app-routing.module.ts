import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PopularesComponent } from './components/populares/populares.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnElCineComponent } from './components/en-el-cine/en-el-cine.component';
import { PopNinosComponent } from './components/pop-ninos/pop-ninos.component';
import { PeliculaDetailComponent } from './components/pelicula-detail/pelicula-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,
  children: [
    { path: 'en_el_cine', component: EnElCineComponent },
    { path: 'populares', component: PopularesComponent },
    { path: 'populares_ninos', component: PopNinosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'en_el_cine' }
    ]
  },
  { path: 'busca/:texto', component: BusquedaComponent },
  { path: 'pelicula/:id/:backpath', component: PeliculaDetailComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
