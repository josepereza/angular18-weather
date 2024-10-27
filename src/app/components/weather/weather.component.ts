import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { WeatherResponse } from '../../interfaces/weather-response';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  weatherData = signal<WeatherResponse | null>(null);
  cityInput = new FormControl('');

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    // Cargar datos iniciales para Stuttgart
    this.searchWeather('Stuttgart');
  }

  searchWeather(city: string = this.cityInput.value!) {
    if (city) {
      this.weatherService.getWeather(city).subscribe({
        next: (data) => this.weatherData.set(data),
        error: (error) => console.error('Error fetching weather data:', error)
      });
    }
  }
}
