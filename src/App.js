import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { CircularProgress, Box, Typography, Button } from "@mui/material";

import SearchField from "./components/SearchField";
import AllDayForecastCard from "./components/AllDayForecastCard";
import UVIndexWidget from "./components/UVIndexWidget";
import SunriseAndSunsetWidget from "./components/SunriseAndSunsetWidget";
import HumidityWidget from "./components/HumidityWidget";
import Widget from "./components/Widget";
import FutureDayForecastCard from "./components/FutureDayForecastCard";

import { darkTheme, lightTheme } from "./assets/theme";
import weatherConditions from "./weatherConditions";

import "./assets/reset.css";
import css from "./App.module.css";

const days = 7;

const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const [theme, setTheme] = useState(lightTheme);
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [targetLocation, setTargetLocation] = useState("Vinnitsa");

  const { location, current, forecast } = weatherInfo;

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData(targetLocation);
    }, 500);

    return () => clearTimeout(timer);
  }, [targetLocation]);

  const fetchData = async (country) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${country}&days=${days}&aqi=no&alerts=no`,
      );
      setWeatherInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLocation = (e) => {
    const targetValue = e.target.value;
    targetValue.length !== 0 &&
      /^[a-zA-Z]*$/.test(targetValue) &&
      setTargetLocation(targetValue);
  };

  const returnIconComponent = (isDay, title) =>
    isDay
      ? weatherConditions[0].weatherComponents[title]
      : weatherConditions[1].weatherComponents[title];

  const changeTheme = (theme) => {
    return theme.palette.mode === "light"
      ? setTheme(darkTheme)
      : setTheme(lightTheme);
  };

  if (!location) {
    return (
      <Box
        sx={{
          width: "100dvw",
          height: "100dvh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ pt: "29px", px: "100px", pb: "57px" }}>
        <Button variant="text" onClick={() => changeTheme(theme)}>
          Change theme
        </Button>
        <header className={css.headerContainer}>
          <Typography variant="h1">
            {`${location.name}, ${location.country}`}
          </Typography>
          <SearchField handleLocation={handleLocation} />
        </header>

        <AllDayForecastCard
          currentDay={current}
          fewDaysForecast={forecast}
          returnIconComponent={returnIconComponent}
        />

        <Box sx={{ display: "flex", gap: "30px", justifyContent: "center" }}>
          <Widget
            title="UV Index"
            titleVal={`${current.uv} UV`}
            component={<UVIndexWidget uv={current.uv} />}
          />
          <Widget
            title="Sunrise and Sunset"
            titleVal={null}
            component={
              <SunriseAndSunsetWidget sunMove={forecast.forecastday[0].astro} />
            }
          />
          <Widget
            title="Humidity"
            titleVal={`${current.humidity}%`}
            component={<HumidityWidget humidity={current.humidity} />}
          />
        </Box>

        <section className={css.fewDaysWeatherContainer}>
          {forecast.forecastday.slice(1).map(({ date, day }) => {
            return (
              <FutureDayForecastCard
                key={uuidv4()}
                date={date}
                dayInfo={day}
                returnIconComponent={returnIconComponent}
              />
            );
          })}
        </section>
      </Box>
    </ThemeProvider>
  );
};

export default App;
