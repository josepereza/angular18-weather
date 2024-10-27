import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../interfaces/weather-response';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '59acf06c322046e691a81154242710';
  private baseUrl = 'http://api.weatherapi.com/v1';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(
      `${this.baseUrl}/current.json?key=${this.apiKey}&q=${city}`
    );
  }
}