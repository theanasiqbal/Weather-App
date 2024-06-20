import React, { useState } from 'react';
import axios from 'axios';

const Weather = ({ user }) => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    setLoading(true);
    try {
      const apiKey = '17677e89cedf6f42d9e9587f02fa762d';
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setWeather(response.data);
      setError(null);
    } catch (err) {
      setError('City not found');
      setWeather(null);
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
    } else {
      setError('Please enter a city');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-10 max-w-md p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold mb-4">Weather App</h1>
      {user && <p className="mb-4">Welcome, {user.displayName}!</p>}
      <form onSubmit={handleSubmit} className="mb-4 flex items-center">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="w-full border rounded py-2 px-4 focus:outline-none focus:border-blue-500"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ml-2">
          {loading ? 'Loading...' : 'Get Weather'}
        </button>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {weather && (
        <div>
          <div className="flex items-center mb-4">
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt={weather.weather[0].description}
              className="w-12 h-12 mr-4"
            />
            <div>
              <h2 className="text-2xl font-semibold">{weather.name}</h2>
              <p className="text-lg">{weather.weather[0].description}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xl">Temperature:</p>
            <p className="text-xl">{weather.main.temp}°C</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
