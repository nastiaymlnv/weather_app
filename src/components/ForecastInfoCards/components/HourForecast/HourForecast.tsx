import React, { ReactNode } from "react";

import { Typography } from "@mui/material";

import css from "./HourForecast.module.css";
import useStyles from "./styles";

interface IHourForecastProps {
  allHoursInfoArr: string[],
  dayPart: number | string,
  getIcon: (isDay: number | boolean | undefined, text: string) => ReactNode,
}

interface forecastTypes {
  time: string,
  is_day: number | undefined,
  condition: {
    text: string
  },
  temp_c: number,
  feelslike_c: number,
  pressure_mb: number,
  humidity: number,
  wind_kph: number,
}

export const HourForecast: React.FC<IHourForecastProps> = ({ allHoursInfoArr, dayPart, getIcon }) => {
  const classes = useStyles();
  const {
    time,
    is_day,
    condition,
    temp_c,
    feelslike_c,
    pressure_mb,
    humidity,
    wind_kph,
  } : forecastTypes = allHoursInfoArr[dayPart];
  const hour = new Date(time).getHours();

  return (
    <section>
      <Typography sx={{ fontSize: "20px" }}>{hour}:00</Typography>
      <div className={css["Card__image"]}>
        {getIcon(is_day, condition.text)}
      </div>
      <Typography className={classes["Card__data"]}>
        {temp_c > 0 && `+${Math.floor(temp_c)}`}°
      </Typography>
      <Typography className={classes["Card__data"]}>
        {feelslike_c > 0 && `+${Math.floor(feelslike_c)}`}°
      </Typography>
      <Typography className={classes["Card__data"]}>
        {pressure_mb}
      </Typography>
      <Typography className={classes["Card__data"]}>
        {humidity}
      </Typography>
      <Typography className={classes["Card__data"]}>
        {wind_kph}
      </Typography>
    </section>
  );
};
