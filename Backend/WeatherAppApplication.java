package com.weatherapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class WeatherAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(WeatherAppApplication.class, args);
    }

    // This Bean allows us to inject RestTemplate anywhere in the app
    // to make HTTP requests to the external OpenWeatherMap API
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
