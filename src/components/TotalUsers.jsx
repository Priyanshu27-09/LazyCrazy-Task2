const TotalUsers = ({ value }) => (
  <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
    <div className="flex justify-between mb-4">
      <span className="text-green-500 font-medium text-sm">live</span>
    </div>
    <div className="flex justify-center">
      <div className="w-24 h-24 sm:w-32 sm:h-32 border-4 border-black rounded-full flex items-center justify-center">
        <div className="text-center">
          <div className="text-xs text-gray-600 mb-1">Total users</div>
          <div className="text-2xl sm:text-4xl font-bold">{String(value).padStart(3, '0')}</div>
        </div>
      </div>
    </div>
  </div>
);
export default TotalUsers;
