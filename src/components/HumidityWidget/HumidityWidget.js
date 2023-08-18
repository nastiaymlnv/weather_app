import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import { useTheme } from "@mui/material/styles";
import { withStyles } from "@mui/styles";
import { List, ListItemText } from "@mui/material";

import { humidityLevels } from "./humidityLevels.js";

import drawSVGAnimationIcon from "./drawSVGAnimationIcon.js";

import styles from "./styles.js";
import css from "./HumidityWidget.module.css";

const HumidityWidget = ({ humidity, classes }) => {
  const theme = useTheme();
  const color =
    theme.palette.background.default === "#FFF" ? "#080338" : "#fff";

  return (
    <div className={css["HumidityWidget"]}>
      <div className={css["HumidityWidget-chart"]} style={{ "--color": color }}>
        {drawSVGAnimationIcon(humidity / 100, color)}
      </div>
      <List className={classes["HumidityWidget-legend"]}>
        {humidityLevels.map((level) => (
          <ListItemText
            key={uuidv4()}
            className={classes["HumidityWidget-legend__item"]}
            disableTypography
          >
            {level}
          </ListItemText>
        ))}
        <span className={css["HumidityWidget-legend__item--max"]}>100</span>
      </List>
    </div>
  );
};

HumidityWidget.propTypes = {
  humidity: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HumidityWidget);
