import React from "react";
import { v4 as uuidv4 } from "uuid";

import { Typography } from "@mui/material";

import HourForecast from "./components/HourForecast/HourForecast";

import hoursForecast from "./hoursForecast";

import css from "./ForecastInfoCards.module.css";

interface Props {
  allHoursInfoArr: string[],
  returnIconComponent: (isDay: number | any, text: string) => any,
}

export const ForecastInfoCards = ({ allHoursInfoArr, returnIconComponent }: Props) => {
  return hoursForecast.map((dayPart) => (
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
  ));
};
