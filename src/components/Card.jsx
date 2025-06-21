const Card = ({ label, value }) => (
  <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4">
    <div className="text-center">
      <div className="text-green-500 text-xs font-medium mb-2">live</div>
      <div className="border-2 border-black rounded-full px-6 py-4">
        <div className="text-xs text-gray-700 mb-1">{label}</div>
        <div className="text-xl font-bold">{value}</div>
      </div>
    </div>
  </div>
);
export default Card;
