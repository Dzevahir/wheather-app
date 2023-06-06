import { useEffect, useState } from "react";
import axios from "axios";

const LocationWeather = ({ location }) => {
  const [setWeatherData] = useState(null);
  const [setError] = useState(null);
  const API_KEY = process.env.REACT_APP_API_KEY2;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `http://dataservice.accuweather.com/currentconditions/v1/${API_KEY}`
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
};

export default LocationWeather;
