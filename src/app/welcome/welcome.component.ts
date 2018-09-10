import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetWeatherDataService } from '../services/get-weather-data.service'
import { User } from '../services/user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  locations : Array<Object> = [];
  currentUser : User;
  errorMessage: string;
  weatherCity: any ;
  weatherLocation: any ;
  latitude : any;
  longitude : any;
  different = false;

  constructor(private router: Router,
              private getData: GetWeatherDataService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("loggedUser"));

    if(!localStorage.getItem("loggedUser")){
      this.router.navigate(['/login']);
    }
    
    let URLCity = 'https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q='+this.currentUser.city+',pl&APPID=3cee49ea17093ac019b3971b0e3bf61c&units=metric';
   
    this.getData.getData(URLCity).subscribe(
        weather => {
          this.weatherCity = weather;
          this.locations.push(weather);
        },
        error => this.errorMessage = <any>error
    );

    this.getLocation();
  }
  
   getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            this.getDataFromLocation();
          });
      } else {
          console.log( "Geolocation is not supported by this browser.");
      }
  }

  getDataFromLocation() {
    let URLCoords = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&APPID=3cee49ea17093ac019b3971b0e3bf61c&units=metric`

    this.getData.getData(URLCoords).subscribe(
      weather => {
        this.weatherLocation = weather;
        this.locations.push(weather);
        if (this.weatherCity.name != this.weatherLocation.name){
          this.different = true;
        }
      },
      error => this.errorMessage = <any>error
  );
  }
}
