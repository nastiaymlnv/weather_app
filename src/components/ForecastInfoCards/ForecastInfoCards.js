import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import { Typography } from "@mui/material";

import HourForecast from "./components/HourForecast/HourForecast";

import hoursForecast from "./hoursForecast";

import css from "./ForecastInfoCards.module.css";

const ForecastInfoCards = ({ allHoursInfoArr, returnIconComponent }) => {
  return hoursForecast.map((dayPart) => {
    return (
      <section key={uuidv4()} className={css.ForecastInfoCards}>
        <Typography sx={{ fontSize: "24px", textAlign: "center" }}>
          {dayPart[0]}
        </Typography>
        <div className={css["ForecastInfoCards-hours"]}>
          <HourForecast
            allHoursInfoArr={allHoursInfoArr}
            dayPart={dayPart[1]}
            returnIconComponent={returnIconComponent}
          />
          <HourForecast
            allHoursInfoArr={allHoursInfoArr}
            dayPart={dayPart[2]}
            returnIconComponent={returnIconComponent}
          />
        </div>
      </section>
    );
  });
};

ForecastInfoCards.propTypes = {
  allHoursInfoArr: PropTypes.array.isRequired,
  returnIconComponent: PropTypes.func.isRequired,
};

export default ForecastInfoCards;
