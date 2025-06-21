const RealtimeUsers = ({ value }) => (
  <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
    <div className="border-4 border-green-500 rounded-lg p-6 bg-green-50">
      <div className="flex justify-between mb-4">
        <span className="text-gray-700 text-sm">Realtime users</span>
        <div className="flex items-center space-x-2">
          <span className="text-green-500 font-medium text-sm">live</span>
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
        </div>
      </div>
      <div className="text-4xl sm:text-6xl font-bold text-green-500">{String(value).padStart(2, '0')}</div>
    </div>
  </div>
);
export default RealtimeUsers;
