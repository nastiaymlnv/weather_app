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
    <Box className={classes["Card-container"]}>
      <Typography variant="h1" sx={{ ml: "18px" }}>
        {currentDate}
      </Typography>
      <section className={css["Card-content"]}>
        <section className={css["Card-content__main-weather"]}>
          <div
            className={css["Card-content__main-weather-image"]}
          >
            {getIcon(currentDay.is_day, currentDay.condition.text)}
          </div>
          <Typography
            variant="h2"
            className={
              classes["Card-main-weather-temperature"]
            }
          >
            {currentDay.temp_c > 0 && `+${Math.floor(currentDay.temp_c)}`}°C
          </Typography>
        </section>
        <section className={css["Card-list-container"]}>
          <List className={classes["Card-list"]}>
            {forecastIndicesList.map((forecastItem) => (
              <ListItemText
                key={uuidv4()}
                className={classes["Card-list__item"]}
                disableTypography
              >
                {forecastItem}
              </ListItemText>
            ))}
          </List>
          <section
            className={css["Card-hourly-forecast"]}
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
