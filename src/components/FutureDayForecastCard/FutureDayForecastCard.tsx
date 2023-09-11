import React from "react";
import cn from "classnames";

import { Typography } from "@mui/material";

import getDateNameFromDate from "../../helpers/getDateNameFromDate";

import mainCSS from "../../App.module.css";
import css from "./FutureDayForecastCard.module.css";
import useStyles from "./styles";

interface Props {
  date: string,
  dayInfo: any,
  returnIconComponent: (isDay: number | any, text: string) => any,
}

interface dayDataTypes {
  condition: {
    text: string
  },
  maxtemp_c: number, 
  mintemp_c: number, 
  is_day: number | undefined
}

export const FutureDayForecastCard = ({
  date,
  dayInfo,
  returnIconComponent,
}: Props) => {
  const classes = useStyles();
  const { condition, maxtemp_c, mintemp_c, is_day }: dayDataTypes = dayInfo;
  const { weekday, dayDate } = getDateNameFromDate(date);
  const isDay = !is_day;  

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
