import React from "react";
import cn from "classnames";

import { withStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

import mainCSS from "../../App.module.css";
import css from "./Widget.module.css";
import styles from "./styles";

interface Props {
  component: JSX.Element,
  title: string,
  titleVal: string,
  classes: any,
}

export const Widget = withStyles(styles)(({
  component,
  title,
  titleVal,
  classes,
}: Props) => {
  return (
    <article className={cn(css.Widget, mainCSS["box-bg"])}>
      <Box className={classes["Widget-title"]}>
        <Typography variant="h3" className={classes["Widget-title__text"]}>
          {title}
        </Typography>
        <Typography variant="h3" className={classes["Widget-title__text"]}>
          {titleVal}
        </Typography>
      </Box>
      {component}
    </article>
  );
});
