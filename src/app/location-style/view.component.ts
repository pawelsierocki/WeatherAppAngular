import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() city : any;
  path : string;
  locations : Array<object> = [];

  constructor() { }

  ngOnInit() {

    let skyDescription = this.city.weather[0].main;
    switch(skyDescription){
      case 'Clear': {
        this.path = "sunny.jpg";
        break;
      }
      case 'Clouds': {
        this.path = 'clouds.jpg';
        break;
      }
    }
  }

   getStyle() {
    return "linear-gradient(to bottom,rgba(255, 250, 250, 0),rgba(0,0,0, 0.5)),url(../../assets/img/"+this.path+")";
  }

  addToFavourites(el) {
    if (!localStorage.getItem("locations")){
      this.locations.push(el);
      localStorage.setItem("locations", JSON.stringify(this.locations));
    } else {
      this.locations = JSON.parse(localStorage.getItem("locations"));
      this.locations.push(el);
      localStorage.setItem("locations", JSON.stringify(this.locations));
    }
    
    console.log(this.locations);
  }
}
