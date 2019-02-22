import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-en-el-cine',
  templateUrl: './en-el-cine.component.html',
  styles: []
})
export class EnElCineComponent implements OnInit {

  loading = true;
  private peliculas: any[] = [];
  private basePosterUrl: string = 'http://image.tmdb.org/t/p/w300';

  constructor(public _ps: PeliculasService) {

    this._ps.getAhoraEnElCine().subscribe( data => {
      console.log(data);
      this.peliculas = data.results;
      this.loading = false;
    });
  }

  ngOnInit() {
  }

}
