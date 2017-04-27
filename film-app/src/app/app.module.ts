import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { FilmCardService } from './film-card/film-card.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    FilmCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule
  ],
  providers: [FilmCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
