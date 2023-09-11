import React, { useMemo, useCallback } from "react";

import { Box, Typography } from "@mui/material";

import { useCurrentTheme } from "../../hooks/useCurrentTheme";

import { today, minutesFormat } from "../../helpers/getTodayDate";
import getTwentyFourHourTime from "../../helpers/getTwentyFourHourTime";

import Sun from "../../assets/icons/SunMove-icon.png";

import css from "./SunriseAndSunsetWidget.module.css";
import useStyles from "./styles";

interface Props {
  sunMove: {
    sunrise: string,
    sunset: string,
  }
}

export const SunriseAndSunsetWidget = ({ sunMove }: Props) => {
  const classes = useStyles();
  const { sunrise, sunset } = sunMove;
  const color = useCurrentTheme();

  const currentDate = ` ${today.getHours()}:${minutesFormat}`;
  const sunriseTimestamp = useMemo(
    () => new Date(`01/01/1970 ${getTwentyFourHourTime(sunrise)}`).getTime(),
    [sunrise],
  );
  const sunsetTimestamp = useMemo(
    () => new Date(`01/01/1970 ${getTwentyFourHourTime(sunset)}`).getTime(),
    [sunset],
  );
  const currentTimestamp = new Date(`01/01/1970 ${currentDate}`).getTime();

  const generateAngleForCssSunMove = useCallback(
    (sunriseTime: number, sunsetTime: number, currentTime: number) => {
      const percent = (currentTime * 100) / sunsetTime;
      const angle = (percent * 180) / 100;

      if (currentTime >= sunsetTime) return "180deg";
      else if (currentTime <= sunriseTime) return "0deg";
      else return `${angle}deg`;
    },
    [sunriseTimestamp, sunsetTimestamp, currentTimestamp],
  );

  const generatePercentForCssSunFilling = useCallback(
    (sunriseTime: number, sunsetTime: number, currentTime: number) => {
      const percent = (currentTime * 100) / (sunsetTime - sunriseTime);

      if (currentTime >= sunsetTime) return "100%";
      else if (currentTime <= sunriseTime) return "0%";
      else return `${percent - 10}%`;
    },
    [sunriseTimestamp, sunsetTimestamp, currentTimestamp],
  );

  return (
    <>
      <Box
        sx={{
          position: "relative",
          px: "15px",
          borderBottom: `1px solid ${color}`,
        }}
      >
        <div
          className={css.SunriseAndSunsetWidget__trajectory}
          style={{ "--color": color }}
        >
          <div
            className={css["SunriseAndSunsetWidget__trajectory-bg"]}
            style={{
              "--currSunBeamPosition": generatePercentForCssSunFilling(
                sunriseTimestamp,
                sunsetTimestamp,
                currentTimestamp,
              ),
            }}
          ></div>
        </div>
        <span>
          <span
            className={css.SunriseAndSunsetWidget__sun}
            style={{
              "--currSunPosition": generateAngleForCssSunMove(
                sunriseTimestamp,
                sunsetTimestamp,
                currentTimestamp,
              ),
            }}
          >
            <img 
              src={Sun}
              alt="Sun"
              className={css["SunriseAndSunsetWidget__sun-image"]}
            />
          </span>
        </span>
      </Box>
      <Box className={classes["SunriseAndSunsetWidget-legend"]}>
        <Box>
          <Typography
            className={classes["SunriseAndSunsetWidget-legend__title"]}
          >
            Sunrise
          </Typography>
          <Typography
            className={classes["SunriseAndSunsetWidget-legend__time"]}
          >
            {getTwentyFourHourTime(sunrise)}
          </Typography>
        </Box>
        <Box>
          <Typography
            className={classes["SunriseAndSunsetWidget-legend__title"]}
          >
            Sunset
          </Typography>
          <Typography
            className={classes["SunriseAndSunsetWidget-legend__time"]}
          >
            {getTwentyFourHourTime(sunset)}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
