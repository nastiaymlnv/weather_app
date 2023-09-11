import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { CircularProgress, Box, Typography, Button } from "@mui/material";

import {
  AllDayForecastCard,
  SearchField,
  FutureDayForecastCard,
  HumidityWidget,
  SunriseAndSunsetWidget,
  UVIndexWidget,
  Widget,
} from "./components";

import { darkTheme, lightTheme } from "./assets/theme";
import weatherConditions from "./weatherConditions";

import "./assets/reset.css";
import css from "./App.module.css";

interface WeatherInfo {
  location: {
    name: string,
    country: string
  },
  current: any, 
  forecast: {
    forecastday: any
  }
}

const days = 7;

const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const [theme, setTheme] = useState(lightTheme);
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>([] as unknown as WeatherInfo);
  const [targetLocation, setTargetLocation] = useState("Vinnitsa");

  const { location, current, forecast } : WeatherInfo = weatherInfo;

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData(targetLocation);
    }, 500);

    return () => clearTimeout(timer);
  }, [targetLocation]);

  const fetchData = async (country: string) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${country}&days=${days}&aqi=no&alerts=no`,
      );
      setWeatherInfo(response.data);
    } catch (error) { 
      console.log(error);
    }
  };

  const handleLocation = (e: { target: { value: string } }) => {
    const targetValue = e.target.value;
    targetValue.length !== 0 &&
      /^[a-zA-Z]*$/.test(targetValue) &&
      setTargetLocation(targetValue);
  };

  const returnIconComponent = (isDay: number | string, title: string | number) =>
    isDay
      ? weatherConditions[0].weatherComponents[title as keyof typeof returnIconComponent]
      : weatherConditions[1].weatherComponents[title as keyof typeof returnIconComponent];

  const changeTheme = (theme) =>
    theme.palette.mode === "light" ? setTheme(darkTheme) : setTheme(lightTheme);

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
      <div className={css.App}>
        <Button variant="text" onClick={() => changeTheme(theme)}>
          Change theme
        </Button>
        <header className={css["App-header"]}>
          <Typography variant="h1" sx={{ mr: "20px" }}>
            {`${location.name}, ${location.country}`}
          </Typography>
          <SearchField handleLocation={handleLocation} />
        </header>

        <AllDayForecastCard
          currentDay={current}
          fewDaysForecast={forecast}
          returnIconComponent={returnIconComponent}
        />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
          }}
        >
          <Widget
            title="UV Index"
            titleVal={`${current.uv} UV`}
            component={<UVIndexWidget uv={current.uv} />}
          />
          <Widget
            title="Sunrise and Sunset"
            titleVal={""}
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

        <section className={css["App__future-forecast-container"]}>
          {forecast.forecastday.slice(1).map(({ date, day } : {date: string, day: any}) => (
            <FutureDayForecastCard
              key={uuidv4()}
              date={date}
              dayInfo={day}
              returnIconComponent={returnIconComponent}
            />
          ))}
        </section>
      </div>
    </ThemeProvider>
  );
};

export default App;
