import { Component, OnInit } from '@angular/core';
import { FilmCardService } from './film-card.service'

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  filmList : Object[] = []
  constructor(private filmCardService: FilmCardService) { }

  ngOnInit() { // this - внутри методов
    this.filmCardService.getFilms().subscribe(data => {
      this.filmList = data;
    })
  }

}
