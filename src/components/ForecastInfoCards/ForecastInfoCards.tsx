import React, { ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

import { Typography } from "@mui/material";

import {HourForecast} from "./components/HourForecast/HourForecast";

import hoursForecast from "./hoursForecast";

import css from "./ForecastInfoCards.module.css";

interface IForecastInfoCardsProps {
  allHoursInfoArr: string[],
  getIcon: (isDay: number | boolean | undefined, text: string) => ReactNode,
}

export const ForecastInfoCards: React.FC<IForecastInfoCardsProps> = ({ allHoursInfoArr, getIcon }) => {
  return hoursForecast.map((dayPart) => (
    <section key={uuidv4()} className={css.ForecastInfoCards}>
      <Typography sx={{ fontSize: "24px", textAlign: "center" }}>
        {dayPart[0]}
      </Typography>
      <div className={css["ForecastInfoCards-hours"]}>
        <HourForecast
          allHoursInfoArr={allHoursInfoArr}
          dayPart={dayPart[1]}
          getIcon={getIcon}
        />
        <HourForecast
          allHoursInfoArr={allHoursInfoArr}
          dayPart={dayPart[2]}
          getIcon={getIcon}
        />
      </div>
    </section>
  ));
};
