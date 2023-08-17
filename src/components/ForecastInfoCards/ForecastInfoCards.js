import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";

import hoursForecast from "./hoursForecast";

import css from "./ForecastInfoCards.module.css";
import styles from "./styles";

const HourForecast = (hoursInfoArr, data, returnIconComponent, classes) => {
  const hourForecast = hoursInfoArr[data];
  const {
    time,
    is_day,
    condition,
    temp_c,
    feelslike_c,
    pressure_mb,
    humidity,
    wind_kph,
  } = hourForecast;
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

const ForecastInfoCards = ({
  allHoursInfoArr,
  returnIconComponent,
  classes,
}) => {
  return hoursForecast.map((dayPart) => {
    return (
      <section key={uuidv4()} className={css.ForecastInfoCards}>
        <Typography sx={{ fontSize: "24px", textAlign: "center" }}>
          {dayPart[0]}
        </Typography>
        <div className={css["ForecastInfoCards-hours"]}>
          {HourForecast(
            allHoursInfoArr,
            dayPart[1],
            returnIconComponent,
            classes,
          )}
          {HourForecast(
            allHoursInfoArr,
            dayPart[2],
            returnIconComponent,
            classes,
          )}
        </div>
      </section>
    );
  });
};

ForecastInfoCards.propTypes = {
  allHoursInfoArr: PropTypes.array.isRequired,
  returnIconComponent: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ForecastInfoCards);
