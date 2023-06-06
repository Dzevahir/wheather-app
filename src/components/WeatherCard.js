import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";

const WeatherCard = ({ location, handleRemoveLocation }) => {
  const [weatherData, setWeatherData] = useState(null);

  const [error, setError] = useState(null);
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherbit.io/v2.0/current?city=${location}&key=${API_KEY}`
        );

        setWeatherData(response.data);
        setError(null);
      } catch (error) {
        setError("Error fetching weather data");
        setWeatherData(null);
      }
    };

    if (location) {
      fetchWeatherData();
    }
  }, [location, API_KEY]);

  return (
    <WeatherDisplay
      location={location}
      weatherData={weatherData}
      handleRemoveLocation={handleRemoveLocation}
    />
  );
};

export default WeatherCard;
