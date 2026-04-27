import axios from 'axios';

// Use environment variable for API URL, fallback to localhost for development
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

export const fetchWeather = async (city) => {
    const response = await axios.get(`${API_BASE_URL}/weather?city=${city}`);
    return response.data;
};

export const fetchForecast = async (city) => {
    const response = await axios.get(`${API_BASE_URL}/forecast?city=${city}`);
    return response.data;
};

// --- Favorites APIs ---
export const getFavorites = async () => {
    const response = await axios.get(`${API_BASE_URL}/favorites`);
    return response.data;
};

export const addFavorite = async (cityName, country) => {
    const response = await axios.post(`${API_BASE_URL}/favorites`, { cityName, country });
    return response.data;
};

export const removeFavorite = async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/favorites/${id}`);
    return response.data;
};
