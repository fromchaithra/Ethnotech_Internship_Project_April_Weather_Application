import { FiDroplet, FiWind, FiThermometer, FiHeart } from 'react-icons/fi';

const WeatherCard = ({ data, onSaveFavorite, isFavorite }) => {
  if (!data) return null;

  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

  return (
    <div className="w-full max-w-md mx-auto bg-white/70 dark:bg-slate-800/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl overflow-hidden transform transition-all hover:scale-[1.02] duration-500 border border-white/20 dark:border-slate-700/50 relative group">
      
      {/* Save Favorite Button */}
      <button 
        onClick={() => onSaveFavorite(data.name, data.sys?.country || '')}
        className="absolute top-6 right-6 p-3 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 backdrop-blur-md rounded-full shadow-lg z-10 transition-all duration-300 transform hover:scale-110 active:scale-95"
        title={isFavorite ? "Remove from Favorites" : "Save to Favorites"}
      >
        <FiHeart size={24} className={`transition-colors duration-300 ${isFavorite ? 'fill-rose-500 text-rose-500' : 'text-slate-700 dark:text-white'}`} />
      </button>

      {/* Header / Temperature */}
      <div className="p-8 pb-10 text-center bg-gradient-to-br from-blue-500/90 via-blue-600/90 to-purple-600/90 dark:from-blue-900/90 dark:via-slate-800/90 dark:to-purple-900/90 text-white relative">
        {/* Subtle decorative circle */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
        <h2 className="text-4xl font-black tracking-tight mb-2 drop-shadow-md">{data.name}</h2>
        <p className="text-blue-100/90 capitalize text-lg font-medium tracking-wide">{data.weather[0].description}</p>
        
        <div className="flex justify-center items-center mt-4 relative">
          <img src={iconUrl} alt="Weather Icon" className="w-40 h-40 drop-shadow-2xl z-10 filter hover:brightness-110 transition-all duration-300" />
          <div className="text-[5rem] leading-none font-black tracking-tighter drop-shadow-lg -ml-4 z-20">
            {Math.round(data.main.temp)}°
          </div>
        </div>
      </div>

      {/* Details Footer */}
      <div className="p-6 grid grid-cols-3 gap-3 text-center bg-white/40 dark:bg-slate-800/40">
        <div className="flex flex-col items-center p-3 rounded-2xl hover:bg-white/50 dark:hover:bg-slate-700/50 transition-colors">
          <div className="p-2 bg-orange-100 dark:bg-orange-500/20 rounded-full mb-2 shadow-sm">
            <FiThermometer className="text-orange-600 dark:text-orange-400" size={22} />
          </div>
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">Feels</span>
          <span className="font-bold text-xl text-slate-800 dark:text-slate-100">{Math.round(data.main.feels_like || data.main.temp)}°</span>
        </div>
        
        <div className="flex flex-col items-center p-3 rounded-2xl hover:bg-white/50 dark:hover:bg-slate-700/50 transition-colors">
          <div className="p-2 bg-blue-100 dark:bg-blue-500/20 rounded-full mb-2 shadow-sm">
            <FiDroplet className="text-blue-600 dark:text-blue-400" size={22} />
          </div>
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">Humidity</span>
          <span className="font-bold text-xl text-slate-800 dark:text-slate-100">{data.main.humidity}%</span>
        </div>
        
        <div className="flex flex-col items-center p-3 rounded-2xl hover:bg-white/50 dark:hover:bg-slate-700/50 transition-colors">
          <div className="p-2 bg-teal-100 dark:bg-teal-500/20 rounded-full mb-2 shadow-sm">
            <FiWind className="text-teal-600 dark:text-teal-400" size={22} />
          </div>
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">Wind</span>
          <span className="font-bold text-xl text-slate-800 dark:text-slate-100">{Math.round(data.wind.speed)} <span className="text-sm font-medium">m/s</span></span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
