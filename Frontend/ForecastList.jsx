import ForecastItem from './ForecastItem';

const ForecastList = ({ forecastData }) => {
  if (!forecastData || !forecastData.list) return null;

  // The free API returns data every 3 hours (40 items for 5 days).
  // We'll filter to show only one reading per day (e.g., around 12:00 PM).
  const dailyForecasts = forecastData.list.filter(item => item.dt_txt.includes('12:00:00'));

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100 pl-4 border-l-4 border-blue-500">
        5-Day Forecast
      </h3>
      <div className="flex overflow-x-auto gap-4 pb-4 px-2 hide-scroll">
        {dailyForecasts.map((item, index) => (
          <ForecastItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ForecastList;
