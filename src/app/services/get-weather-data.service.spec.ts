import { TestBed, inject } from '@angular/core/testing';

import { GetWeatherDataService } from './get-weather-data.service';

describe('GetWeatherDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetWeatherDataService]
    });
  });

  it('should be created', inject([GetWeatherDataService], (service: GetWeatherDataService) => {
    expect(service).toBeTruthy();
  }));
});
