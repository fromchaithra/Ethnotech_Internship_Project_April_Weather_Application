package com.weatherapp.service;

import com.weatherapp.model.Favorite;
import com.weatherapp.repository.FavoriteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoriteService {

    private final FavoriteRepository favoriteRepository;

    public FavoriteService(FavoriteRepository favoriteRepository) {
        this.favoriteRepository = favoriteRepository;
    }

    public List<Favorite> getAllFavorites() {
        return favoriteRepository.findAll();
    }

    public Favorite addFavorite(Favorite favorite) {
        // Prevent duplicate favorites
        if (favoriteRepository.existsByCityNameIgnoreCase(favorite.getCityName())) {
            throw new RuntimeException("City is already in favorites.");
        }
        return favoriteRepository.save(favorite);
    }

    public void removeFavorite(Long id) {
        if (!favoriteRepository.existsById(id)) {
            throw new RuntimeException("Favorite city not found.");
        }
        favoriteRepository.deleteById(id);
    }
}
