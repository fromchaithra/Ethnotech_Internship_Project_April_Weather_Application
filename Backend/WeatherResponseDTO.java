package com.weatherapp.dto;

import lombok.Data;
import java.util.List;

/**
 * Data Transfer Object (DTO) for mapping OpenWeatherMap JSON response
 * into Java Objects automatically.
 * Using @Data from Lombok to auto-generate Getters, Setters, etc.
 */
@Data
public class WeatherResponseDTO {
    private String name; // City name
    private Main main;
    private List<Weather> weather;
    private Wind wind;

    @Data
    public static class Main {
        private double temp;
        private double humidity;
    }

    @Data
    public static class Weather {
        private String main;
        private String description;
        private String icon;
    }

    @Data
    public static class Wind {
        private double speed;
    }
}
