import { useState } from 'react';
import { FiSearch, FiMapPin } from 'react-icons/fi';

const SearchBar = ({ onSearch, isLoading }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto relative group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
        <FiMapPin size={20} />
      </div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search for a city..."
        className="w-full pl-12 pr-14 py-4 bg-white dark:bg-slate-800 border-2 border-transparent focus:border-blue-500 rounded-2xl shadow-lg focus:shadow-blue-500/20 outline-none text-lg transition-all duration-300 dark:text-white"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="absolute inset-y-2 right-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FiSearch size={20} />
      </button>
    </form>
  );
};

export default SearchBar;
