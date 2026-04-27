import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastList from './components/ForecastList';
import FavoritesList from './components/FavoritesList';
import SkeletonLoader from './components/SkeletonLoader';
import { fetchWeather, fetchForecast, getFavorites, addFavorite, removeFavorite } from './services/api';
import { FiSun, FiMoon, FiAlertTriangle } from 'react-icons/fi';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Fetch favorites on initial load
  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const data = await getFavorites();
      setFavorites(data);
    } catch (err) {
      console.error("Failed to load favorites", err);
    }
  };

  const handleSearch = async (city) => {
    setLoading(true);
    setError('');
    
    try {
      const [weatherData, forecastData] = await Promise.all([
        fetchWeather(city),
        fetchForecast(city)
      ]);
      setWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch weather data. Please try again.');
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveFavorite = async (cityName, country) => {
    try {
      const existingFav = favorites.find(f => f.cityName.toLowerCase() === cityName.toLowerCase());
      if (existingFav) {
        await removeFavorite(existingFav.id);
      } else {
        await addFavorite(cityName, country);
      }
      loadFavorites();
    } catch (err) {
      console.error("Failed to update favorites", err);
    }
  };

  const handleRemoveFavorite = async (id) => {
    try {
      await removeFavorite(id);
      loadFavorites();
    } catch (err) {
      console.error("Failed to remove favorite", err);
    }
  };

  const isCurrentFavorite = weather ? favorites.some(f => f.cityName.toLowerCase() === weather.name.toLowerCase()) : false;

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 pt-12 pb-24 px-4 sm:px-6 lg:px-8 relative transition-colors duration-500">
      {/* Decorative background blobs */}
      <div className="fixed top-0 inset-x-0 h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-400/20 dark:bg-purple-600/10 blur-[120px]"></div>
      </div>

      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-6 right-6 p-4 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/40 dark:border-slate-700 shadow-xl text-slate-800 dark:text-yellow-400 hover:scale-110 active:scale-95 transition-all duration-300 z-50 group"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? <FiSun size={24} className="group-hover:rotate-90 transition-transform duration-500" /> : <FiMoon size={24} className="group-hover:-rotate-12 transition-transform duration-500" />}
      </button>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <h1 className="text-6xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 drop-shadow-sm">
            SkyCast
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-medium tracking-wide">
            Your premium weather companion
          </p>
        </div>
        
        <SearchBar onSearch={handleSearch} isLoading={loading} />
        
        {loading && <SkeletonLoader />}
        
        {error && (
          <div className="mt-12 p-6 bg-red-50/80 dark:bg-red-900/20 backdrop-blur-sm border border-red-200 dark:border-red-800/50 rounded-[2rem] shadow-lg flex items-center justify-center space-x-4 animate-fade-in-up">
            <FiAlertTriangle className="text-red-500 dark:text-red-400 flex-shrink-0" size={32} />
            <p className="text-red-700 dark:text-red-300 font-semibold text-lg">{error}</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 gap-8 mt-12">
          <div className="flex flex-col items-center w-full">
            {weather && !loading && (
              <div className="w-full animate-fade-in-up">
                <WeatherCard 
                  data={weather} 
                  onSaveFavorite={handleSaveFavorite} 
                  isFavorite={isCurrentFavorite}
                />
                {forecast && <ForecastList forecastData={forecast} />}
              </div>
            )}
            
            {/* Show Favorites List below if available */}
            {!loading && <FavoritesList 
              favorites={favorites} 
              onSelectFavorite={handleSearch}
              onRemoveFavorite={handleRemoveFavorite}
            />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
