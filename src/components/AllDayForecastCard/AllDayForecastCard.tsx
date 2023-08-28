import React from "react";
import { v4 as uuidv4 } from "uuid";

import { withStyles } from "@mui/styles";
import { Box, Typography, List, ListItemText } from "@mui/material";

import { ForecastInfoCards } from "..";

import { monthsArray } from "../../config/monthsArray";
import forecastIndicesList from "./forecastIndicesList";

import { today, minutesFormat } from "../../helpers/getTodayDate";

import css from "./AllDayForecastCard.module.css";
import styles from "./styles";

interface Props {
  currentDay: {
    is_day: number | undefined,
    temp_c: number,
    condition: {
      text: string
    }
  },
  fewDaysForecast: {
    forecastday: object
  },
  returnIconComponent: (isDay: number | any, text: string) => any,
  classes: any,
}

export const AllDayForecastCard = withStyles(styles)((props: Props) => {
  const { currentDay, fewDaysForecast, returnIconComponent, classes } = props;
  const allHoursInfoArr = fewDaysForecast.forecastday[0].hour;
  const currentDate = `${today.getDate()} ${
    monthsArray[today.getMonth()]
  }, ${today.getFullYear()} ${today.getHours()}:${minutesFormat}`;

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
            {returnIconComponent(currentDay.is_day, currentDay.condition.text)}
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
              returnIconComponent={returnIconComponent}
            />
          </section>
        </section>
      </section>
    </Box>
  );
});
