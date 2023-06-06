import React, { useMemo } from "react";
import { Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import CountryFlag from "react-country-flag";
import * as WiIcons from "react-icons/wi";

const WeatherDisplayWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  marginTop: "80px",
  display: "grid",
  width: "400px",
  gridColumnGap: "10px",
  gridRowGap: "5px",
  borderRadius: "12px",
  boxShadow: "0px 0px 0px 5px rgba(255, 165, 0, 1)",
  border: "2px solid chartreuse",
}));

const Temperature = styled("span")({
  fontWeight: "bold",
  fontSize: "1.5rem",
});

const WindArrow = styled("span")({
  display: "inline-block",
  width: "15px",
  height: "15px",
  marginLeft: "15px",
  border: "solid",
  borderColor: "black",
  borderWidth: "0 2px 2px 0",
  transform: "rotate(45deg)",
});
const WindSpeed = styled("span")({
  fontWeight: "bold",
  fontSize: "1.5rem",
});
const Condition = styled("span")({
  fontSize: "3rem",
  marginTop: "-15px",
});

const WeatherDisplay = ({ weatherData, handleRemoveLocation, location }) => {
  const displayName = useMemo(() => {
    if (weatherData && weatherData.data && weatherData.data[0].city_name) {
      return weatherData.data[0].city_name;
    }
    return "N/A";
  }, [weatherData]);

  const displayTemperature = useMemo(() => {
    if (weatherData && weatherData.data && weatherData.data[0].temp) {
      return `${weatherData.data[0].temp}°C`;
    }
    return "N/A";
  }, [weatherData]);

  const displayCondition = useMemo(() => {
    const weatherDescription = weatherData?.data?.[0]?.weather?.description;

    switch (weatherDescription) {
      // Thunderstorm
      case "Thunderstorm with light rain":
      case "Thunderstorm with rain":
      case "Thunderstorm with heavy rain":
      case "Thunderstorm with light drizzle":
      case "Thunderstorm with drizzle":
      case "Thunderstorm with heavy drizzle":
      case "Thunderstorm with hail":
        return <WiIcons.WiThunderstorm />;

      // Drizzle
      case "Light drizzle":
      case "Drizzle":
      case "Heavy drizzle":
        return <WiIcons.WiSprinkle />;

      // Rain
      case "Light rain":
      case "Moderate Rain":
      case "Heavy rain":
      case "Freezing rain":
      case "Light shower rain":
      case "Shower rain":
      case "Heavy shower rain":
        return <WiIcons.WiRain />;

      // Snow
      case "Light snow":
      case "Snow":
      case "Heavy snow":
      case "Mix snow/rain":
      case "Sleet":
      case "Heavy sleet":
      case "Snow shower":
      case "Heavy snow shower":
      case "Flurries":
      case "Haze":
        return <WiIcons.WiSnow />;

      // Mist/Fog
      case "Mist":
      case "Fog":
      case "Freezing fog":
        return <WiIcons.WiFog />;

      // Clear Sky
      case "Clear":
      case "Clear sky":
        return <WiIcons.WiDaySunny />;

      // Clouds
      case "Few clouds":
      case "Scattered clouds":
      case "Broken clouds":
      case "Overcast clouds":
        return <WiIcons.WiCloudy />;

      default:
        return null;
    }
  }, [weatherData]);

  const displayWindSpeed = useMemo(() => {
    if (weatherData && weatherData.data && weatherData.data[0].wind_spd) {
      const windSpeedMs = weatherData.data[0].wind_spd;
      const windSpeedKmh = Math.round(windSpeedMs * 3.6);
      return `${windSpeedKmh} km/h`;
    }
    return "N/A";
  }, [weatherData]);

  const windDirectionStyle = useMemo(() => {
    if (weatherData && weatherData.data && weatherData.data[0].wind_dir) {
      const deg = weatherData.data[0].wind_dir;
      return {
        transform: `rotate(${deg}deg)`,
      };
    }
    return {};
  }, [weatherData]);

  const displayCountryCode = useMemo(() => {
    if (weatherData && weatherData.data && weatherData.data[0].country_code) {
      return weatherData.data[0].country_code.toLowerCase();
    }
    return null;
  }, [weatherData]);

  const handleRemove = () => {
    handleRemoveLocation(location);
  };

  return (
    <WeatherDisplayWrapper>
      <Typography variant="h4">
        {displayName}
        {displayCountryCode && (
          <CountryFlag
            style={{
              float: "right",
              borderRadius: "70%",
            }}
            countryCode={displayCountryCode}
            svg
          />
        )}
      </Typography>
      <Box
        mt={4}
        style={{
          marginTop: "50px",
          display: "flex",
          flexDirection: "row",
          width: "400px",
          height: "80px",
          justifyContent: "space-evenly",
        }}
      >
        <Typography>
          <Temperature>{displayTemperature}</Temperature>
        </Typography>
        <Condition> {displayCondition}</Condition>
        <WindSpeed>
          {displayWindSpeed}
          <WindArrow style={windDirectionStyle}></WindArrow>
        </WindSpeed>
      </Box>
      <Button
        onClick={handleRemove}
        variant="outlined"
        color="secondary"
        sx={{ marginTop: "0px", color: "red", borderColor: "red" }}
      >
        REMOVE
      </Button>
    </WeatherDisplayWrapper>
  );
};

export default WeatherDisplay;
