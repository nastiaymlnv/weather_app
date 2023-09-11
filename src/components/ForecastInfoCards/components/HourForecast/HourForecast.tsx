import React from "react";

import { Typography } from "@mui/material";

import css from "./HourForecast.module.css";
import useStyles from "./styles";

interface Props {
  allHoursInfoArr: string[],
  dayPart: number | string,
  returnIconComponent: (isDay: number | any, text: string) => any,
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

export const HourForecast = ({
  allHoursInfoArr,
  dayPart,
  returnIconComponent
}: Props) => {
  const classes = useStyles();
  const hourForecast = allHoursInfoArr[dayPart];
  const {
    time,
    is_day,
    condition,
    temp_c,
    feelslike_c,
    pressure_mb,
    humidity,
    wind_kph,
  } : forecastTypes = hourForecast;
  const hour = new Date(time).getHours();

  return (
    <section>
      <Typography sx={{ fontSize: "20px" }}>{hour}:00</Typography>
      <div className={css["HourForecast-image"]}>
        {returnIconComponent(is_day, condition.text)}
      </div>
      <Typography className={classes["HourForecast-data"]}>
        {temp_c > 0 && `+${Math.floor(temp_c)}`}°
      </Typography>
      <Typography className={classes["HourForecast-data"]}>
        {feelslike_c > 0 && `+${Math.floor(feelslike_c)}`}°
      </Typography>
      <Typography className={classes["HourForecast-data"]}>
        {pressure_mb}
      </Typography>
      <Typography className={classes["HourForecast-data"]}>
        {humidity}
      </Typography>
      <Typography className={classes["HourForecast-data"]}>
        {wind_kph}
      </Typography>
    </section>
  );
};
