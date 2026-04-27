const SkeletonLoader = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-12 animate-pulse">
      {/* Card Skeleton */}
      <div className="bg-slate-200 dark:bg-slate-800/80 rounded-[2rem] overflow-hidden shadow-xl border border-slate-300 dark:border-slate-700">
        <div className="h-64 bg-slate-300 dark:bg-slate-700/50 w-full relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
            <div className="w-48 h-10 bg-slate-400 dark:bg-slate-600 rounded-xl"></div>
            <div className="w-32 h-6 bg-slate-400 dark:bg-slate-600 rounded-lg"></div>
            <div className="w-28 h-28 bg-slate-400 dark:bg-slate-600 rounded-full mt-4"></div>
          </div>
        </div>
        <div className="p-6 grid grid-cols-3 gap-4 bg-slate-100 dark:bg-slate-800">
          <div className="h-20 bg-slate-300 dark:bg-slate-700/50 rounded-2xl"></div>
          <div className="h-20 bg-slate-300 dark:bg-slate-700/50 rounded-2xl"></div>
          <div className="h-20 bg-slate-300 dark:bg-slate-700/50 rounded-2xl"></div>
        </div>
      </div>
      
      {/* Forecast Skeleton */}
      <div className="mt-12">
        <div className="w-40 h-8 bg-slate-300 dark:bg-slate-700/50 rounded-lg mb-6 ml-4"></div>
        <div className="flex gap-4 overflow-hidden px-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="min-w-[110px] h-36 bg-slate-200 dark:bg-slate-800/80 rounded-[1.5rem] flex-shrink-0 border border-slate-300 dark:border-slate-700"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
