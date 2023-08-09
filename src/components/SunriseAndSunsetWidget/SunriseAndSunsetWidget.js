import React from "react";
import PropTypes from "prop-types";

import { useTheme } from "@mui/material/styles";
import { withStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

import Sun from "../../assets/icons/SunMove-icon.png";

import css from "./SunriseAndSunsetWidget.module.css";
import styles from "./styles";

const SunriseAndSunsetWidget = ({ sunMove, classes }) => {
  const { sunrise, sunset } = sunMove;
  const theme = useTheme();
  const color =
    theme.palette.background.default === "#FFF" ? "#080338" : "#fff";

  const getTwentyFourHourTime = (timeString) => {
    var date = new Date("01/01/1970 " + timeString);
    return date.getHours() + ":" + date.getMinutes();
  };

  const today = new Date();
  const minutesFormat =
    today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
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

    return `${angle}deg`;
  };
  const generatePercentForCssSunMove = (sunriseTime, sunsetTime, currTime) => {
    const percent = (currTime * 100) / (sunsetTime - sunriseTime);

    return `${percent - 5}%`;
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
              "--currSunBeamPosition": generatePercentForCssSunMove(
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography className={classes.Titles}>Sunrise</Typography>
          <Typography className={classes.Time} sx={{ mt: "4px" }}>
            {getTwentyFourHourTime(sunrise)}
          </Typography>
        </Box>
        <Box>
          <Typography className={classes.Titles}>Sunset</Typography>
          <Typography className={classes.Time} sx={{ mt: "4px" }}>
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
