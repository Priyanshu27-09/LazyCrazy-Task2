import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LocationSelectors from './components/LocationSelectors';
import TotalUsers from './components/TotalUsers';
import RealtimeUsers from './components/RealtimeUsers';
import Card from './components/Card';
import Chart from './components/Chart';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalUsers: 12,
    realtimeUsers: 3,
    totalUserAds: 1,
    businessProfile: 1,
    bannerAd: 1,
    videoAds: 1,
    homeAds: 1
  });

  const [locations, setLocations] = useState({ countries: [] });
  const [selectedCountry, setSelectedCountry] = useState('India');
  const [selectedState, setSelectedState] = useState('Haryana');
  const [selectedCity, setSelectedCity] = useState('Gurugram');

  useEffect(() => {
    fetchLocations();
  }, []);

  useEffect(() => {
    fetchDashboardData();
  }, [selectedCountry, selectedState, selectedCity]);

  const fetchLocations = () => {
    const mockLocations = {
      countries: [
        {
          name: 'India',
          states: [
            { name: 'Haryana', cities: ['Gurugram', 'Faridabad', 'Panipat'] },
            { name: 'Delhi', cities: ['New Delhi', 'South Delhi'] },
            { name: 'Maharashtra', cities: ['Mumbai', 'Pune'] },
            { name: 'Karnataka', cities: ['Bangalore', 'Mysore'] },
            { name: 'Tamil Nadu', cities: ['Chennai', 'Coimbatore'] },
            { name: 'Uttar Pradesh', cities: ['Lucknow', 'Kanpur'] },
            { name: 'West Bengal', cities: ['Kolkata', 'Howrah'] },
            { name: 'Rajasthan', cities: ['Jaipur', 'Jodhpur'] }
          ]
        }
      ]
    };
    setLocations(mockLocations);
  };

  const fetchDashboardData = () => {
    const locationKey = `${selectedCountry}-${selectedState}-${selectedCity}`;
    const hash = locationKey.split('').reduce((a, b) => ((a << 5) - a) + b.charCodeAt(0), 0);
    const seed = Math.abs(hash);

    const mockData = {
      totalUsers: Math.floor((seed % 900) + 100),
      realtimeUsers: Math.floor((seed % 50) + 1),
      totalUserAds: Math.floor((seed % 10) + 1),
      businessProfile: Math.floor(((seed * 2) % 10) + 1),
      bannerAd: Math.floor(((seed * 3) % 10) + 1),
      videoAds: Math.floor(((seed * 4) % 10) + 1),
      homeAds: Math.floor(((seed * 5) % 10) + 1),
    };

    setDashboardData(mockData);
  };

  const getStates = () => {
    const country = locations.countries.find(c => c.name === selectedCountry);
    return country ? country.states : [];
  };

  const getCities = () => {
    const country = locations.countries.find(c => c.name === selectedCountry);
    const state = country?.states.find(s => s.name === selectedState);
    return state ? state.cities : [];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-8 text-center">
          LzyCrazy Real-Time Engagement Dashboard
        </h1>

        <LocationSelectors
          countries={locations.countries}
          selectedCountry={selectedCountry}
          selectedState={selectedState}
          selectedCity={selectedCity}
          setSelectedCountry={setSelectedCountry}
          setSelectedState={setSelectedState}
          setSelectedCity={setSelectedCity}
          getStates={getStates}
          getCities={getCities}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          <TotalUsers value={dashboardData.totalUsers} />
          <RealtimeUsers value={dashboardData.realtimeUsers} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <Card label="Total User Ads" value={dashboardData.totalUserAds} />
          <Card label="Business Profile" value={dashboardData.businessProfile} />
          <Card label="Banner Ad" value={dashboardData.bannerAd} />
          <Card label="Video Ads" value={dashboardData.videoAds} />
          <Card label="Home Ads" value={dashboardData.homeAds} />
        </div>

        <Chart />
      </main>
    </div>
  );
};

export default Dashboard;

