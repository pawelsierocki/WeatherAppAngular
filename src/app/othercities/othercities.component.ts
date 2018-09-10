import { Component, OnInit } from '@angular/core';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Cities } from '../services/cities';
import { GetWeatherDataService } from '../services/get-weather-data.service';

@Component({
  selector: 'app-othercities',
  templateUrl: './othercities.component.html',
  styleUrls: ['./othercities.component.css']
})
export class OthercitiesComponent implements OnInit {
  filteredOptions: Observable<string[]>;
  myControl = new FormControl();
  currentCity : any;
  errorMessage: any;
  selectedCity : any;
  constructor(private cities : Cities,
              private getData : GetWeatherDataService) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
}

    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();

      return this.cities.options.filter(option => option.toLowerCase().includes(filterValue));
    }

  changeCity() {
    this.selectedCity = null;
    let URLCity = 'https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q='+this.currentCity+',pl&APPID=3cee49ea17093ac019b3971b0e3bf61c&units=metric';
   
    this.getData.getData(URLCity).subscribe(
        weather => {
          this.selectedCity = weather;
        },
        error => this.errorMessage = <any>error
    );
  }
}
