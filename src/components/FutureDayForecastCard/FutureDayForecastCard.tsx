import React, { ReactNode } from "react";

import cn from "classnames";
import { Typography } from "@mui/material";

import getDateNameFromDate from "../../helpers/getDateNameFromDate";

import mainCSS from "../../App.module.css";
import css from "./FutureDayForecastCard.module.css";
import useStyles from "./styles";

interface IFutureDayForecastCardProps {
  date: string,
  dayInfo: dayDataTypes,
  getIcon: (isDay: number | boolean | undefined, text: string) => ReactNode,
}

interface dayDataTypes {
  condition: {
    text: string
  },
  maxtemp_c: number, 
  mintemp_c: number, 
  is_day: number | boolean | undefined
}

export const FutureDayForecastCard: React.FC<IFutureDayForecastCardProps> = ({ date, dayInfo, getIcon }) => {
  const classes = useStyles();
  const { condition, maxtemp_c, mintemp_c, is_day }: dayDataTypes = dayInfo;
  const { weekday, dayDate } = getDateNameFromDate(date);
  const isDay = !is_day;  

  return (
    <article className={cn(css["Card-container"], mainCSS["Box-bg"])}>
      <div>
        <Typography
          variant="h3"
          className={classes["Card-title"]}
        >
          {weekday}
        </Typography>
        <Typography>{dayDate}</Typography>
      </div>
      <div className={css["Card-content"]}>
        <div className={css["Card-content__image"]}>
          {getIcon(isDay, condition.text)}
        </div>
        <span>
          <Typography
            className={classes["Card-content__data"]}
            sx={{ mb: "4px" }}
          >
            {maxtemp_c > 0 && `+${Math.floor(maxtemp_c)}`}°
          </Typography>
          <Typography
            className={classes["Card-content__data"]}
            sx={{ color: "#686868" }}
          >
            {mintemp_c > 0 && `+${Math.floor(mintemp_c)}`}°
          </Typography>
        </span>
      </div>
    </article>
  );
};
