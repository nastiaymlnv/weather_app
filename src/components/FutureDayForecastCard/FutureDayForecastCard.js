import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";

import getDateNameFromDate from "../../helpers/getDateNameFromDate";

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
  const { weekday, dayDate } = getDateNameFromDate(date);
  const isDay = is_day ? false : true;

  return (
    <article className={cn(css["futureDayForecastCard"], mainCSS["box-bg"])}>
      <div>
        <Typography
          variant="h3"
          className={classes["FutureDayForecastCard-title"]}
        >
          {weekday}
        </Typography>
        <Typography>{dayDate}</Typography>
      </div>
      <div className={css["FutureDayForecastCard-content"]}>
        <div className={css["FutureDayForecastCard-content__image"]}>
          {returnIconComponent(isDay, condition.text)}
        </div>
        <span>
          <Typography
            className={classes["FutureDayForecastCard-content__data"]}
            sx={{ mb: "4px" }}
          >
            {maxtemp_c > 0 && `+${Math.floor(maxtemp_c)}`}°
          </Typography>
          <Typography
            className={classes["FutureDayForecastCard-content__data"]}
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
