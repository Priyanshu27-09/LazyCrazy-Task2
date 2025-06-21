const Chart = () => (
  <div className="bg-gray-600 rounded-lg p-4 sm:p-6 relative overflow-hidden">
    <div className="flex items-end justify-center space-x-2 h-32">
      {[20, 35, 45, 60, 75, 90, 85, 95].map((height, i) => (
        <div
          key={i}
          className="bg-yellow-400 rounded-t"
          style={{ height: `${height}%`, width: '20px', minHeight: '15px' }}
        />
      ))}
    </div>
    <div className="absolute top-4 right-4">
      <svg className="w-12 h-8 text-white" viewBox="0 0 100 40">
        <path d="M0 20 Q25 10 50 20 T100 20" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    </div>
  </div>
);
export default Chart;
