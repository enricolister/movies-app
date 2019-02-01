import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  public movie: {
    
  }

  private apiKey: string = "8a0399c51e10aac452653b58ad2308f6";
  private urlMovieDb: string = "https://api.themoviedb.org/3";

  constructor(private _http: HttpClient) { }

  getAhoraEnElCine() {
    let url = `${this.urlMovieDb}/movie/now_playing?api_key=${this.apiKey}&language=es&page=1&region=it`;
    return this._http.jsonp(url, 'callback=JSONP_CALLBACK').pipe(map( (res: any) => res ));
  }
  
  getPopulares() {
    let url = `${this.urlMovieDb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this._http.jsonp(url, 'callback=JSONP_CALLBACK').pipe(map( (res: any) => res ));
  }

  getPopularesNinos() {
    let url = `${this.urlMovieDb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this._http.jsonp(url, 'callback=JSONP_CALLBACK').pipe(map( (res: any) => res ));
  }
  
  buscarPelicula(texto: string) {
    let url = `${this.urlMovieDb}/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this._http.jsonp(url, 'callback=JSONP_CALLBACK').pipe(map( (res: any) => res ));
  }

  showMovie(id: string) {
    let url = `${this.urlMovieDb}/movie/${id}?api_key=${this.apiKey}&language=es`;
    //let url = 'https://api.themoviedb.org/3/movie/375588?api_key=8a0399c51e10aac452653b58ad2308f6&language=es';
    return this._http.jsonp(url, 'callback=JSONP_CALLBACK').pipe(map( (res: any) => res ));
  }
}
