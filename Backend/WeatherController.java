package com.weatherapp.controller;

import com.weatherapp.dto.WeatherResponseDTO;
import com.weatherapp.service.WeatherService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // Allows React frontend on a different port to make requests
public class WeatherController {

    private final WeatherService weatherService;

    // Dependency injection via constructor
    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    /**
     * Endpoint: GET /api/weather?city={city}
     */
    @GetMapping("/weather")
    public ResponseEntity<WeatherResponseDTO> getWeather(@RequestParam String city) {
        return ResponseEntity.ok(weatherService.getCurrentWeather(city));
    }
    
    /**
     * Endpoint: GET /api/forecast?city={city}
     */
    @GetMapping("/forecast")
    public ResponseEntity<Object> getForecast(@RequestParam String city) {
        return ResponseEntity.ok(weatherService.getForecast(city));
    }
}
