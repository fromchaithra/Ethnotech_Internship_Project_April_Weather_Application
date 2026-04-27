package com.weatherapp.service;

import com.weatherapp.dto.WeatherResponseDTO;
import com.weatherapp.exception.CityNotFoundException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class WeatherService {

    @Value("${openweathermap.api.key}")
    private String apiKey;

    @Value("${openweathermap.api.url}")
    private String apiUrl;

    private final RestTemplate restTemplate;

    public WeatherService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public WeatherResponseDTO getCurrentWeather(String city) {
        if ("YOUR_API_KEY_HERE".equals(apiKey)) {
            return getMockCurrentWeather(city);
        }
        
        String url = String.format("%s/weather?q=%s&appid=%s&units=metric", apiUrl, city, apiKey);
        try {
            return restTemplate.getForObject(url, WeatherResponseDTO.class);
        } catch (HttpClientErrorException.NotFound e) {
            throw new CityNotFoundException("City not found: " + city);
        } catch (Exception e) {
            throw new RuntimeException("Error fetching weather data", e);
        }
    }
    
    public Object getForecast(String city) {
        if ("YOUR_API_KEY_HERE".equals(apiKey)) {
            return getMockForecast(city);
        }
        
        String url = String.format("%s/forecast?q=%s&appid=%s&units=metric", apiUrl, city, apiKey);
        try {
            return restTemplate.getForObject(url, Object.class);
        } catch (HttpClientErrorException.NotFound e) {
            throw new CityNotFoundException("City not found: " + city);
        } catch (Exception e) {
            throw new RuntimeException("Error fetching forecast data", e);
        }
    }
    
    // ----- MOCK DATA GENERATORS FOR TESTING WITHOUT API KEY -----
    
    private WeatherResponseDTO getMockCurrentWeather(String city) {
        WeatherResponseDTO mock = new WeatherResponseDTO();
        mock.setName(city + " (Mocked)");
        
        WeatherResponseDTO.Main main = new WeatherResponseDTO.Main();
        main.setTemp(25.5);
        main.setHumidity(60);
        mock.setMain(main);
        
        WeatherResponseDTO.Weather weather = new WeatherResponseDTO.Weather();
        weather.setMain("Clear");
        weather.setDescription("clear sky");
        weather.setIcon("01d");
        mock.setWeather(Collections.singletonList(weather));
        
        WeatherResponseDTO.Wind wind = new WeatherResponseDTO.Wind();
        wind.setSpeed(4.5);
        mock.setWind(wind);
        
        return mock;
    }
    
    private Object getMockForecast(String city) {
        Map<String, Object> response = new HashMap<>();
        List<Map<String, Object>> list = new ArrayList<>();
        
        for (int i = 0; i < 5; i++) {
            Map<String, Object> day = new HashMap<>();
            // Generates 5 days of forecast data at 12:00:00 (which frontend expects)
            day.put("dt_txt", "2026-04-" + (26 + i) + " 12:00:00");
            
            Map<String, Object> main = new HashMap<>();
            main.put("temp", 22.0 + i);
            day.put("main", main);
            
            Map<String, Object> weather = new HashMap<>();
            weather.put("description", "mocked forecast");
            weather.put("icon", "02d");
            day.put("weather", Collections.singletonList(weather));
            
            list.add(day);
        }
        
        response.put("list", list);
        return response;
    }
}
