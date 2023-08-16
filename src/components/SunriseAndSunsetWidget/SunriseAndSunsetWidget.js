import React from "react";
import PropTypes from "prop-types";

import { useTheme } from "@mui/material/styles";
import { withStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

import { today, minutesFormat } from "../../helpers/getTodayDate";
import getTwentyFourHourTime from "../../helpers/getTwentyFourHourTime";

import Sun from "../../assets/icons/SunMove-icon.png";

import css from "./SunriseAndSunsetWidget.module.css";
import styles from "./styles";

const SunriseAndSunsetWidget = ({ sunMove, classes }) => {
  const { sunrise, sunset } = sunMove;
  const theme = useTheme();
  const color =
    theme.palette.background.default === "#FFF" ? "#080338" : "#fff";

  const currentDate = ` ${today.getHours()}:${minutesFormat}`;
  const sunriseTimestamp = new Date(
    `01/01/1970 ${getTwentyFourHourTime(sunrise)}`,
  ).getTime();
  const sunsetTimestamp = new Date(
    `01/01/1970 ${getTwentyFourHourTime(sunset)}`,
  ).getTime();
  const currentTimestamp = new Date(`01/01/1970 ${currentDate}`).getTime();

  const generateAngleForCssSunMove = (sunsetTime, currTime) => {
    const percent = (currTime * 100) / sunsetTime;
    const angle = (percent * 180) / 100;

    if (currentTimestamp >= sunsetTimestamp) return "180deg";
    else if (currentTimestamp <= sunriseTimestamp) return "0deg";
    else return `${angle}deg`;
  };

  const generatePercentForCssSunFilling = (
    sunriseTime,
    sunsetTime,
    currTime,
  ) => {
    const percent = (currTime * 100) / (sunsetTime - sunriseTime);

    if (currentTimestamp >= sunsetTimestamp) return "100%";
    else if (currentTimestamp <= sunriseTimestamp) return "0%";
    else return `${percent - 10}%`;
  };

  return (
    <>
      <Box
        className={classes.SunMoveAnimationContainer}
        sx={{ px: "15px", borderBottom: `1px solid ${color}` }}
      >
        <div
          className={css.sunMoveTrajectoryContainer}
          style={{ "--color": color }}
        >
          <div
            className={css.fillBg}
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
            className={css.sunContainer}
            style={{
              "--currSunPosition": generateAngleForCssSunMove(
                sunsetTimestamp,
                currentTimestamp,
              ),
            }}
          >
            <img src={Sun} alt="Sun" className={css.sun} />
          </span>
        </span>
      </Box>
      <Box className={classes.legend}>
        <Box>
          <Typography className={classes.legendTitles}>Sunrise</Typography>
          <Typography className={classes.legendTime}>
            {getTwentyFourHourTime(sunrise)}
          </Typography>
        </Box>
        <Box>
          <Typography className={classes.legendTitles}>Sunset</Typography>
          <Typography className={classes.legendTime}>
            {getTwentyFourHourTime(sunset)}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

SunriseAndSunsetWidget.propTypes = {
  sunMove: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SunriseAndSunsetWidget);
