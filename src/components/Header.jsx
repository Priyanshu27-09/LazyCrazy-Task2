
import logo from '../assets/logo.png';
const Header = () => (
  <header className="bg-white shadow-sm border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center">
              <img src={logo} alt="Logo" className="w-8 h-8 rounded" />
            <span className="text-xl font-bold text-gray-800">LzyCrazy</span>
          </div>
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
            <span>👤 Mr Hasan Id lc001</span>
            <span>📱</span>
            <span>💻</span>
            <span>🔔</span>
            <span>⚙️</span>
            <span>👤</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-xs sm:text-sm text-gray-600">Id lc001</span>
          <button className="text-red-500 text-xs sm:text-sm hover:text-red-700">🚪 Sign out</button>
        </div>
      </div>
    </div>
  </header>
);
export default Header;
