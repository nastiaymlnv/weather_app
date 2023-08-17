import React from "react";
import PropTypes from "prop-types";
import cn from 'classnames';

import { withStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

import mainCSS from "../../App.module.css";
import css from "./Widget.module.css";
import styles from "./styles";

const Widget = ({ component, title, titleVal, classes }) => {
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

Widget.propTypes = {
  component: PropTypes.element,
  title: PropTypes.string,
  titleVal: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Widget);
