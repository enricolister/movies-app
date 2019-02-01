import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pop-ninos',
  templateUrl: './pop-ninos.component.html',
  styles: []
})
export class PopNinosComponent implements OnInit {

  private loading = true;
  private peliculas: any[] = [];
  private basePosterUrl: string = 'http://image.tmdb.org/t/p/w300';

  constructor(public _ps: PeliculasService) {

    this._ps.getPopularesNinos().subscribe( data => {
      console.log(data);
      this.peliculas = data.results;
      this.loading = false;
    });
  }

  ngOnInit() {
  }

}
