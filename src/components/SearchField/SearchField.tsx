import React from "react";

import { useTheme } from "@mui/material/styles";
import { Box, TextField, InputAdornment } from "@mui/material";

import {ReactComponent as LightIcon} from "../../assets/icons/Magnifier-light.svg";
import {ReactComponent as DarkIcon} from "../../assets/icons/Magnifier-dark.svg";

import useStyles from "./styles";

interface Props {
  handleLocation: (e: { target: { value: string } }) => void
}

export const SearchField = ({ handleLocation } : Props) => {
  const classes = useStyles();
  const theme : any = useTheme();

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
};
