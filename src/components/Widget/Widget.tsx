import React from "react";
import cn from "classnames";

import { Box, Typography } from "@mui/material";

import mainCSS from "../../App.module.css";
import css from "./Widget.module.css";
import useStyles from "./styles";

interface IWidgetProps {
  component: JSX.Element,
  title: string,
  titleVal: string
}

export const Widget: React.FC<IWidgetProps> = ({ component, title, titleVal }) => {
  const classes = useStyles();

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
};
