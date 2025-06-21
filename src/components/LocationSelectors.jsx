const LocationSelectors = ({
  countries,
  selectedCountry,
  selectedState,
  selectedCity,
  setSelectedCountry,
  setSelectedState,
  setSelectedCity,
  getStates,
  getCities
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Country</label>
          <select
            value={selectedCountry}
            onChange={(e) => {
              const country = e.target.value;
              setSelectedCountry(country);
              const firstState = countries.find(c => c.name === country)?.states[0]?.name;
              if (firstState) setSelectedState(firstState);
            }}
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
          >
            {countries.map((country) => (
              <option key={country.name} value={country.name}>{country.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select State</label>
          <select
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              const firstCity = getStates().find(s => s.name === e.target.value)?.cities[0];
              if (firstCity) setSelectedCity(firstCity);
            }}
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
          >
            {getStates().map(state => (
              <option key={state.name} value={state.name}>{state.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select City</label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
          >
            {getCities().map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default LocationSelectors;
