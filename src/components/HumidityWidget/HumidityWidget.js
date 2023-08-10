import React from "react";
import PropTypes from "prop-types";

import { useTheme } from "@mui/material/styles";
import { withStyles } from "@mui/styles";
import { List, ListItemText } from "@mui/material";

import drawSVGAnimationIcon from "./drawSVGAnimationIcon.js";

import styles from "./styles.js";
import css from "./HumidityWidget.module.css";

const HumidityWidget = ({ humidity, classes }) => {
  const theme = useTheme();
  const color =
    theme.palette.background.default === "#FFF" ? "#080338" : "#fff";

  return (
    <div className={css.humidityWrapper}>
      <div className={css.humidityChart} style={{ "--color": color }}>
        {drawSVGAnimationIcon(humidity / 100, color)}
      </div>
      <List
        className={classes.humidityLegend}
        sx={{ display: "flex", justifyContent: "space-between", p: "0" }}
      >
        <ListItemText
          className={classes.humidityLevel}
          sx={{ fontSize: "12px", ml: "10px" }}
          disableTypography
        >
          0
        </ListItemText>
        <ListItemText
          className={classes.humidityLevel}
          sx={{ fontSize: "12px" }}
          disableTypography
        >
          25
        </ListItemText>
        <ListItemText
          className={classes.humidityLevel}
          sx={{ fontSize: "12px" }}
          disableTypography
        >
          50
        </ListItemText>
        <ListItemText
          className={classes.humidityLevel}
          sx={{ fontSize: "12px" }}
          disableTypography
        >
          75
        </ListItemText>
        <span className={css.maxHumidity}>100</span>
      </List>
    </div>
  );
};

HumidityWidget.propTypes = {
  humidity: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HumidityWidget);
