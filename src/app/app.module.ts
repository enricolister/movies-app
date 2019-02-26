import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EnElCineComponent } from './components/en-el-cine/en-el-cine.component';
import { PopularesComponent } from './components/populares/populares.component';
import { PopNinosComponent } from './components/pop-ninos/pop-ninos.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PeliculaDetailComponent } from './components/pelicula-detail/pelicula-detail.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnElCineComponent,
    PopularesComponent,
    PopNinosComponent,
    LoadingComponent,
    PeliculaDetailComponent,
    BusquedaComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
