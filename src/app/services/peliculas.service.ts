import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey: string = "8a0399c51e10aac452653b58ad2308f6";
  private urlMovieDb: string = "https://api.themoviedb.org/3";

  constructor(private _http: HttpClient) { }

  getPopulares() {
    let url = `${this.urlMovieDb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this._http.jsonp(url, 'callback=JSONP_CALLBACK').pipe(map( (res: any) => res ));
  }
  
  // RESULTADO )); // El &callback=JSONP_CALLBACK` ya va en la URL
}
