import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import { withStyles } from "@mui/styles";
import { Box, Typography, List, ListItemText } from "@mui/material";

import ForecastInfoCards from "../ForecastInfoCards/ForecastInfoCards";

import { monthsArray } from "../../config/monthsArray";
import forecastIndicesList from "./forecastIndicesList";

import { today, minutesFormat } from "../../helpers/getTodayDate";

import css from "./AllDayForecastCard.module.css";
import styles from "./styles";

const AllDayForecastCard = (props) => {
  const { currentDay, fewDaysForecast, returnIconComponent, classes } = props;
  const allHoursInfoArr = fewDaysForecast.forecastday[0].hour;
  const currentDate = `${today.getDate()} ${
    monthsArray[today.getMonth()]
  }, ${today.getFullYear()} ${today.getHours()}:${minutesFormat}`;

  return (
    <>
      <Box className={classes.dayForecastWrapper}>
        <Typography variant="h1" sx={{ ml: "18px" }}>
          {currentDate}
        </Typography>
        <section className={css.dayForecastContent}>
          <section>
            <div className={css.dayForecastWeatherImgWrapper}>
              {returnIconComponent(
                currentDay.is_day,
                currentDay.condition.text,
              )}
            </div>
            <Typography variant="h2" sx={{ mt: "35px", textAlign: "center" }}>
              {currentDay.temp_c > 0 && `+${Math.floor(currentDay.temp_c)}`}°C
            </Typography>
          </section>
          <section className={css.forecastHourly}>
            <List sx={{ mr: "19px" }}>
              {forecastIndicesList.map((forecastItem) => {
                return (
                  <ListItemText
                    key={uuidv4()}
                    className={classes.listItemText}
                    sx={{ mt: "13px", mb: "8px" }}
                    disableTypography
                  >
                    {forecastItem}
                  </ListItemText>
                );
              })}
            </List>
            <section className={css.forecastHourlyWrapper}>
              <ForecastInfoCards
                allHoursInfoArr={allHoursInfoArr}
                returnIconComponent={returnIconComponent}
              />
            </section>
          </section>
        </section>
      </Box>
    </>
  );
};

AllDayForecastCard.propTypes = {
  currentDay: PropTypes.object.isRequired,
  fewDaysForecast: PropTypes.object.isRequired,
  returnIconComponent: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AllDayForecastCard);
