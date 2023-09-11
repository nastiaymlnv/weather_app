import React from "react";

import { v4 as uuidv4 } from "uuid";
import { List, ListItemText } from "@mui/material";

import { useCurrentTheme } from "../../hooks/useCurrentTheme";

import { humidityLevels } from "./humidityLevels";

import drawSVGAnimationIcon from "./drawSVGAnimationIcon";

import useStyles from "./styles";
import css from "./HumidityWidget.module.css";

interface IHumidityWidgetProps {
  humidity: number
}

export const HumidityWidget: React.FC<IHumidityWidgetProps> = ({ humidity }) => {
  const classes = useStyles();
  const color = useCurrentTheme();

  return (
    <div className={css["Widget-container"]}>
      <div className={css["Widget-chart"]} style={{ "--color": color }}>
        {drawSVGAnimationIcon(humidity / 100, color)}
      </div>
      <List className={classes["Widget-legend"]}>
        {humidityLevels.map((level) => (
          <ListItemText
            key={uuidv4()}
            className={classes["Widget-legend__item"]}
            disableTypography
          >
            {level}
          </ListItemText>
        ))}
        <span className={css["Widget-legend__item--max"]}>100</span>
      </List>
    </div>
  );
};
