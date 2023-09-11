import React, { ReactNode, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

import { Box, Typography, List, ListItemText } from "@mui/material";

import { ForecastInfoCards } from "..";

import { monthsArray } from "../../config/months/monthsArray";
import forecastIndicesList from "./forecastIndicesList";

import { today, minutesFormat } from "../../helpers/getTodayDate";

import css from "./AllDayForecastCard.module.css";
import useStyles from "./styles";

interface IAllDayForecastCardProps {
  currentDay: {
    is_day: number | undefined,
    temp_c: number,
    condition: {
      text: string
    }
  },
  allHoursInfoArr: string[],
  getIcon: (isDay: number | boolean | undefined, text: string) => ReactNode,
}

export const AllDayForecastCard: React.FC<IAllDayForecastCardProps> = ({ currentDay, allHoursInfoArr, getIcon }) => {
  const classes = useStyles();
  const currentDate = useMemo(() => `${today.getDate()} ${
    monthsArray[today.getMonth()]
  }, ${today.getFullYear()} ${today.getHours()}:${minutesFormat}`, [today]);

  return (
    <Box className={classes.AllDayForecastCard}>
      <Typography variant="h1" sx={{ ml: "18px" }}>
        {currentDate}
      </Typography>
      <section className={css["AllDayForecastCard-content"]}>
        <section className={css["AllDayForecastCard-content__main-weather"]}>
          <div
            className={css["AllDayForecastCard-content__main-weather-image"]}
          >
            {getIcon(currentDay.is_day, currentDay.condition.text)}
          </div>
          <Typography
            variant="h2"
            className={
              classes["AllDayForecastCard-content__main-weather-temperature"]
            }
          >
            {currentDay.temp_c > 0 && `+${Math.floor(currentDay.temp_c)}`}°C
          </Typography>
        </section>
        <section className={css["AllDayForecastCard__list-container"]}>
          <List className={classes["AllDayForecastCard__list"]}>
            {forecastIndicesList.map((forecastItem) => (
              <ListItemText
                key={uuidv4()}
                className={classes["AllDayForecastCard__list-item"]}
                disableTypography
              >
                {forecastItem}
              </ListItemText>
            ))}
          </List>
          <section
            className={css["AllDayForecastCard__hourly-forecast-container"]}
          >
            <ForecastInfoCards
              allHoursInfoArr={allHoursInfoArr}
              getIcon={getIcon}
            />
          </section>
        </section>
      </section>
    </Box>
  );
};
