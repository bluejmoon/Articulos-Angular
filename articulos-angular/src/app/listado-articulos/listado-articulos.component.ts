import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-articulos',
  templateUrl: './listado-articulos.component.html',
  styleUrls: ['./listado-articulos.component.scss']
})
export class ListadoArticulosComponent {
  albums = {
    name: '',
    artist: '',
    type: '',
    year: 0
  }

  favorites = [
    {
      name: 'Alone in the City',
      artist: 'Dreamcatcher',
      type: 'EP',
      year: 2018
    },
    {
      name: 'Eyes Wide Open',
      artist: 'Twice',
      type: 'Album',
      year: 2020
    },
    {
      name: 'XX',
      artist: 'LOONA',
      type: 'EP',
      year: 2019
    },
    {
      name: 'Unforgiven',
      artist: 'Le Sserafim',
      type: 'Album',
      year: 2023
    },
    {
      name: 'The Red',
      artist: 'Red Velvet',
      type: 'Album',
      year: 2015
    }
  ]

  showAlbums(){
    return this.favorites.length > 0; 
  }
}
