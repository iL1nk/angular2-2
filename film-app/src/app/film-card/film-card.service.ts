import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class FilmCardService {
  url: string = "http://www.omdbapi.com/?page=1&s="
  apikey: string = "&apikey=520bbe17"
  constructor(private http: Http) { 
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.Search || {};
  }

  getFilms(filmName: string) { // вызывать из компонента
    return this.http.get(this.url + filmName + this.apikey).map(this.extractData)
  }

}

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=520bbe17
// Poster API: http://img.omdbapi.com/?i=tt3896198&h=600&apikey=520bbe17