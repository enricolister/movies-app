import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EnElCineComponent } from './components/en-el-cine/en-el-cine.component';
import { PopularesComponent } from './components/populares/populares.component';
import { PopNinosComponent } from './components/pop-ninos/pop-ninos.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PeliculaDetailComponent } from './components/pelicula-detail/pelicula-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnElCineComponent,
    PopularesComponent,
    PopNinosComponent,
    LoadingComponent,
    PeliculaDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
