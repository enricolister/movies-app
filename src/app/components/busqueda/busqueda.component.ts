import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent {

  private texto: string;
  private loading = true;
  private peliculas: any[] = [];
  private basePosterUrl: string = 'http://image.tmdb.org/t/p/w300';
  private backURLtoSend: string;

  constructor(private router: ActivatedRoute, private _ps: PeliculasService) { 
    this.router.params.subscribe(params => {
      this.texto = params.texto;
      this._ps.buscarPelicula(this.texto).subscribe( data => {
        console.log(data);
        this.peliculas = data.results;
        this.loading = false;
        this.backURLtoSend = 'busca-' + this.texto;
      });
    });
    
  }

}
