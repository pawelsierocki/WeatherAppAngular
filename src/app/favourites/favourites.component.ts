import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  locations : Array<Object> = [];

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem("locations")) {
      this.locations = JSON.parse(localStorage.getItem("locations"));
    }
  }

}
