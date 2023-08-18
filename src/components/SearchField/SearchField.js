import React from "react";
import PropTypes from "prop-types";

import { useTheme } from "@mui/material/styles";
import { withStyles } from "@mui/styles";
import { Box, TextField, InputAdornment } from "@mui/material";

import { ReactComponent as LightIcon } from "../../assets/icons/magnifier_light-theme.svg";
import { ReactComponent as DarkIcon } from "../../assets/icons/magnifier_dark-theme.svg";

import styles from "./styles";

export const SearchField = withStyles(styles)(({ handleLocation, classes }) => {
  const theme = useTheme();

  return (
    <Box sx={{ position: "relative" }}>
      <TextField
        className={classes.SearchField__input}
        placeholder="Search the city"
        onChange={handleLocation}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& > fieldset": {
              border: "none",
            },
          },
        }}
        InputProps={{
          style: theme.input,
          startAdornment: (
            <InputAdornment position="start" sx={{ pr: "5px", mb: "4px" }}>
              {theme.palette.background.default === "#FFF" ? (
                <LightIcon />
              ) : (
                <DarkIcon />
              )}
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
});

SearchField.propTypes = {
  handleLocation: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};
