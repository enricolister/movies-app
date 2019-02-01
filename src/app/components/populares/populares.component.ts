import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styles: []
})
export class PopularesComponent implements OnInit {

  private loading = true;
  private peliculas: any[] = [];
  private basePosterUrl: string = 'http://image.tmdb.org/t/p/w300';

  constructor(public _ps: PeliculasService) {

    this._ps.getPopulares().subscribe( data => {
      console.log(data.results);
      this.peliculas = data.results;
      this.loading = false;
    });
  }

  ngOnInit() {
  }

}
