import { FiTrash2, FiMapPin, FiChevronRight } from 'react-icons/fi';

const FavoritesList = ({ favorites, onSelectFavorite, onRemoveFavorite }) => {
  if (!favorites || favorites.length === 0) return null;

  return (
    <div className="mt-16 w-full max-w-md mx-auto bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-[2.5rem] shadow-xl overflow-hidden p-8 border border-white/40 dark:border-slate-700/50 transition-all duration-300">
      <h3 className="text-[13px] font-bold mb-6 text-slate-500 dark:text-slate-400 flex items-center uppercase tracking-widest">
        <FiMapPin className="mr-2 text-rose-500" size={18} />
        Saved Locations
      </h3>
      <ul className="space-y-4">
        {favorites.map((fav) => (
          <li 
            key={fav.id} 
            className="flex items-center justify-between p-4 bg-white/80 dark:bg-slate-700/80 rounded-[1.5rem] shadow-sm hover:shadow-md border border-slate-100 dark:border-slate-600 transition-all duration-300 group hover:-translate-y-1 cursor-pointer"
            onClick={() => onSelectFavorite(fav.cityName)}
          >
            <div className="flex-1 flex flex-col justify-center">
              <span className="text-lg font-bold text-slate-800 dark:text-slate-100 tracking-tight">{fav.cityName}</span>
              {fav.country && <span className="text-slate-400 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">{fav.country}</span>}
            </div>
            
            <div className="flex items-center space-x-2">
              <div 
                className="p-2.5 text-blue-500 bg-blue-50 dark:bg-blue-900/30 rounded-xl group-hover:bg-blue-100 dark:group-hover:bg-blue-800/50 transition-colors"
              >
                <FiChevronRight size={20} />
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the list item click
                  onRemoveFavorite(fav.id);
                }}
                className="p-2.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-xl transition-all focus:outline-none hover:scale-110 active:scale-95"
                title="Remove from favorites"
              >
                <FiTrash2 size={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
