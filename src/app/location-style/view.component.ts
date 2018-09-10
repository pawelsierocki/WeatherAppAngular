import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() city : any;
  path : string;
  locations : Array<object> = [];
  favourite : boolean = false;

  constructor(private toastr: ToastrService) { }

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

    let all = JSON.parse(localStorage.getItem("locations"));
    all.forEach(element => {
      if (this.city.name==element.name) {
        this.favourite = true;
      }
    });

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
    
    this.favourite = true;
    this.toastr.success("Successfully added to favourite list!")
  }

  removeFromFavourites(el) {
    let all = JSON.parse(localStorage.getItem("locations"));
    all.forEach((element, index) => {
      if (el.name==element.name) {
        all.splice(index,1);
      }
    });
    localStorage.setItem("locations", JSON.stringify(all));
    this.favourite = false;
    this.toastr.warning("Removed from favourite list")
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}
