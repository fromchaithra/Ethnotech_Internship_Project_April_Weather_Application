package com.weatherapp.repository;

import com.weatherapp.model.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FavoriteRepository extends JpaRepository<Favorite, Long> {
    
    // Custom query method to find a city by name
    Optional<Favorite> findByCityNameIgnoreCase(String cityName);
    
    // Custom query to check if a city exists
    boolean existsByCityNameIgnoreCase(String cityName);
}
