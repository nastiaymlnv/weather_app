import React, { useCallback } from "react";
import cn from "classnames";
import { v4 as uuidv4 } from "uuid";

import { useTheme } from "@mui/material/styles";
import { List, ListItemText } from "@mui/material";

import { useCurrentTheme } from "../../hooks/useCurrentTheme";

import { UVLevels } from "./UVLevels";

import css from "./UVIndexWidget.module.css";
import useStyles from "./styles";

interface Props {
  uv: number
}

const WHITE = "#FFF";

export const UVIndexWidget = ({ uv }: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const color = useCurrentTheme();

  const generateAngleForCssAnimation = useCallback((uvLevel: number) => {
    const percent = (uvLevel * 100) / 12;
    const angle = (percent * 180) / 100;

    return angle;
  }, [uv]);

  return (
    <div className={css.UVIndexWidget} 
    style={{ "--color": color }}
    >
      <div
        className={cn(
          css.UVIndexWidget__zonecircle,
          css["UVIndexWidget__zonecircle--upper"],
        )}
        style={{ "--uv": `${generateAngleForCssAnimation(uv)}deg` }}
      ></div>
      <div
        className={cn(
          css.UVIndexWidget__zonecircle,
          css["UVIndexWidget__zonecircle--lower"],
        )}
        style={{ "--uv": `${generateAngleForCssAnimation(uv) - 90}deg` }}
      ></div>
      <div
        className={cn(css.UVIndexWidget__bg, css["UVIndexWidget__bg--back"])}
        style={{ "--color": color }}
      ></div>
      <div
        className={cn(css.UVIndexWidget__bg, css["UVIndexWidget__bg--front"])}
        style={{
          "--bg":
            theme.palette.background.default === WHITE
              ? WHITE
              : "rgba(8, 3, 56, 0.7)",
        }}
      >
        <List className={classes["UVIndexWidget-levels-list"]}>
          {UVLevels.map((level) => (
            <ListItemText
              key={uuidv4()}
              className={classes["UVIndexWidget-levels-list__item"]}
              sx={Object.values(level)}
              disableTypography
            >
              {Object.keys(level)}
            </ListItemText>
          ))}
        </List>
      </div>
    </div>
  );
};
