import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

import "./Widget.css";
import styles from "./styles";

const Widget = ({ component, title, titleVal, classes }) => {
  return (
    <article className="container main-container-bg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: "20px",
          mb: "23px",
        }}
      >
        <Typography variant="h3" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="h3" className={classes.title}>
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
