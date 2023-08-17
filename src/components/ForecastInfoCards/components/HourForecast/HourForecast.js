import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";

import css from "./HourForecast.module.css";
import styles from "./styles";

const HourForecast = ({
  allHoursInfoArr,
  dayPart,
  returnIconComponent,
  classes,
}) => {
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

HourForecast.propTypes = {
  allHoursInfoArr: PropTypes.array.isRequired,
  dayPart: PropTypes.number.isRequired,
  returnIconComponent: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HourForecast);
