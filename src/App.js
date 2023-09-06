import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import SetUnits from './components/SetUnits';
import WeatherReport from './components/WeatherReport';

function App() {
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState({});

  const getResults = (event) => {
     if (event.key === 'Enter') {
      fetchData(event.target.value);
    }
  }


  const fetchData = async (newKeyword) => {
    const apiKey = process.env.REACT_APP_API_KEY;

    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${newKeyword}`);
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const cities = await response.json();
      console.log(cities);
      setWeatherData(cities);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  

  useEffect(() => {
    fetchData('London');
  }, []);

  return (
    <div className="weather-app">
      <h1>WeatherWatch</h1>
      <Input getResults={getResults} />
      {error && <p>{error}</p>}
      <WeatherReport
        location={weatherData.location?.name || ""}
        conditions={weatherData.current?.condition?.text || ""}
        icon={weatherData.current?.condition?.icon || ""}
        temp_c={weatherData.current?.temp_c || ""}
        temp_f={weatherData.current?.temp_f || ""}
        temp_min={weatherData.current?.temp_c || ""}
        wind_speed={weatherData.current?.wind_kph || ""}
        wind_direction={weatherData.current?.wind_dir || ""}
        pressure={weatherData.current?.pressure_in || ""}
        humidity={weatherData.current?.humidity || ""}
      />
    </div>
  );
}

export default App;
