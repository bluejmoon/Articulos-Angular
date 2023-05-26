import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'List of favorite albums';

  albums = [
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
    },
    {
      name: 'My World',
      artist: 'aespa',
      type: 'EP',
      year: 2023
    }
  ]

  showAlbums(){
    return this.albums.length > 0; 
  }
}
