package com.weatherapp.exception;

/**
 * Custom Exception thrown when a city is not found in OpenWeatherMap API.
 */
public class CityNotFoundException extends RuntimeException {
    public CityNotFoundException(String message) {
        super(message);
    }
}
