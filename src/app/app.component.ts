import { Router } from '@angular/router';

import { Component } from '@angular/core';
import { _ParseAST } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  title = 'moviesapp';
  textoDeBusqueda: string;
  
  constructor(private router: Router) {}


  buscarPelicula(texto: string) {
    this.router.navigate(['/busca', this.textoDeBusqueda]);
  }
}
