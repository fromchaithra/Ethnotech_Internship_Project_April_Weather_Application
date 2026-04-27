const ForecastItem = ({ data }) => {
  const date = data.dt ? new Date(data.dt * 1000) : new Date(data.dt_txt);
  const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="min-w-[110px] p-5 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md rounded-[1.5rem] shadow-sm hover:shadow-xl flex flex-col items-center flex-shrink-0 border border-white/50 dark:border-slate-700/50 transform transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
      <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest group-hover:text-blue-500 transition-colors">{dayName}</span>
      
      <div className="relative my-3">
        <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img src={iconUrl} alt="weather icon" className="w-16 h-16 drop-shadow-md relative z-10 group-hover:scale-110 transition-transform duration-300" />
      </div>
      
      <span className="text-2xl font-black text-slate-800 dark:text-white tracking-tighter">
        {Math.round(data.main.temp)}°
      </span>
      <span className="text-[10px] font-semibold text-slate-400 mt-1 uppercase tracking-wider truncate w-full text-center">
        {data.weather[0].description}
      </span>
    </div>
  );
};

export default ForecastItem;
