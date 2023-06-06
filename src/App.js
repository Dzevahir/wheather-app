import React, { useState, useEffect } from "react";
import WeatherCard from "../src/components/WeatherCard";
import { Grid, Button, TextField } from "@mui/material";

const App = () => {
  const [locations, setLocations] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const storedLocations = localStorage.getItem("locations");
    if (storedLocations) {
      setLocations(JSON.parse(storedLocations));
    }
  }, []);

  const handleAddLocation = () => {
    setIsFormVisible(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newLocation = event.target.elements.location.value;
    if (newLocation) {
      const updatedLocations = [...locations, newLocation];
      setLocations(updatedLocations);
      localStorage.setItem("locations", JSON.stringify(updatedLocations));
      setIsFormVisible(false);
    }
  };

  const handleRemoveLocation = (locationToRemove) => {
    const updatedLocations = locations.filter(
      (location) => location !== locationToRemove
    );

    setLocations(updatedLocations);

    localStorage.setItem("locations", JSON.stringify(updatedLocations));
  };

  return (
    <Grid container spacing={2}>
      {isFormVisible && (
        <Grid
          container
          justifyContent="center"
          position="absolute"
          backgroundColor="#f5f5f5"
          width={"50vw"}
          marginLeft={"25vw"}
          borderRadius={"10px"}
        >
          <form onSubmit={handleFormSubmit}>
            <TextField
              style={{ width: "50vw" }}
              type="text"
              name="location"
              placeholder="Enter a location"
            />
          </form>
        </Grid>
      )}

      <Grid item xs={12}>
        <Grid
          style={{
            margin: "1vw",
            marginLeft: "2vw",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {locations.map((location, index) => (
            <Grid
              item
              xs={12}
              key={index}
              style={{ marginLeft: "1vw" }}
              className="weather-card"
            >
              <WeatherCard
                location={location}
                handleRemoveLocation={handleRemoveLocation}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Button
        className="add-location-button"
        onClick={handleAddLocation}
        disabled={isFormVisible}
        style={{
          position: "absolute",
          left: "92vw",
          bottom: 10,
          height: 60,
          fontSize: 30,
          fontWeight: "bold",
          backgroundColor: "chartreuse",
          opacity: isFormVisible ? 0.5 : 1,
          pointerEvents: isFormVisible ? "none" : "auto",
          borderRadius: "50%",
        }}
      >
        +
      </Button>

      <style>
        {`
      @media only screen and (min-width: 768px) and (max-width: 1023px) {
        .weather-card {
          grid-column: span 2;
          margin-bottom: 20px;
          margin-top: 20px;
          margin-left: 20px;
        }

        .add-location-button {
        margin-left: -50px;
        margin-bottom: 685px;
          

         
         
        
          
         
        }
      }

      @media only screen and (max-width: 767px) {
        .weather-card {
          grid-column: span 3;
          
        }

        .add-location-button {
          margin-left: -50px;
          margin-bottom: 685px;

         
         
         
        }
      }
    `}
      </style>
    </Grid>
  );
};

export default App;
