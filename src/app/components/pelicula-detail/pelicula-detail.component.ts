import { PeliculasService } from 'src/app/services/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula-detail',
  templateUrl: './pelicula-detail.component.html',
  styles: []
})
export class PeliculaDetailComponent implements OnInit {

  private id: string;
  private backpath: string;
  private loading = true;
  private bigPosterUrl: string = 'http://image.tmdb.org/t/p/w500';
  private pelicula: {};

  constructor(private router: ActivatedRoute, private _ps: PeliculasService) {
    this.router.params.subscribe( params => { 
      this.id = params.id;

      let pre_backpath = params.backpath;
      if (pre_backpath === 'populares' || pre_backpath === 'populares_ninos' || pre_backpath === 'en_el_cine' ) {
        this.backpath = '/home/' + pre_backpath;
      } else {
        let re = /-/gi;
        this.backpath = '/' + pre_backpath.replace(re, "/");
      }

      this._ps.showMovie(this.id).subscribe( data => {
        console.log(data);
        this.pelicula = data;
        this.loading = false;
      });
    });
   }

  ngOnInit() {
  }

}
