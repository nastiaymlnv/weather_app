import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";

import { monthsArray } from "../../config/monthsArray";
import { daysArray } from "./daysArray";

import mainCSS from "../../App.module.css";
import css from "./FutureDayForecastCard.module.css";
import styles from "./styles";

const FutureDayForecastCard = ({
  date,
  dayInfo,
  returnIconComponent,
  classes,
}) => {
  const { condition, maxtemp_c, mintemp_c, is_day } = dayInfo;
  const defineIsDay = !!is_day;
  const isDay = defineIsDay ? false : true;
  const newDate = new Date(date);
  const weekday = daysArray[newDate.getDay()];
  const dayDate = `${newDate.getDate()} ${monthsArray[newDate.getMonth()]}`;

  return (
    <article
      className={`${css.futureDayForecastCard} ${mainCSS.mainContainerBg}`}
    >
      <div>
        <Typography variant="h3" className={classes.futureForecastTitle}>
          {weekday}
        </Typography>
        <Typography>{dayDate}</Typography>
      </div>
      <div className={css.futureDayForecastCardInfo}>
        <div className={css.futureDayForecastCardInfoImgWrapper}>
          {returnIconComponent(isDay, condition.text)}
        </div>
        <span>
          <Typography className={classes.futureForecastItem} sx={{ mb: "4px" }}>
            {maxtemp_c > 0 && `+${Math.floor(maxtemp_c)}`}°
          </Typography>
          <Typography
            className={classes.futureForecastItem}
            sx={{ color: "#686868" }}
          >
            {mintemp_c > 0 && `+${Math.floor(mintemp_c)}`}°
          </Typography>
        </span>
      </div>
    </article>
  );
};

FutureDayForecastCard.propTypes = {
  date: PropTypes.string.isRequired,
  dayInfo: PropTypes.object.isRequired,
  returnIconComponent: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FutureDayForecastCard);
