import { createTheme } from "@mui/material/styles";

const WHITE = "#FFF";
const GREY = "#C0C0C0";
const DARK_BLUE = "#080338";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: DARK_BLUE,
    },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          color: WHITE,
          "&::placeholder": {
            color: GREY,
          },
        },
      },
    },
  },
  typography: {
    fontFamily: ["Open Sans"].join(","),
    h1: {
      color: WHITE,
      fontSize: "24px",
    },
    h2: {
      color: WHITE,
      fontFamily: "Inter",
      fontSize: "70px",
      fontWeight: 400,
    },
    body1: {
      color: WHITE,
    },
    body2: {
      color: GREY,
      fontSize: "18px",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: WHITE,
    },
  },
  typography: {
    fontFamily: ["Open Sans"].join(","),
    h1: {
      color: DARK_BLUE,
      fontSize: "24px",
    },
    h2: {
      color: DARK_BLUE,
      fontFamily: "Inter",
      fontSize: "70px",
      fontWeight: 400,
    },
    body1: {
      color: DARK_BLUE,
    },
    body2: {
      color: GREY,
      fontSize: "18px",
    },
  },
});

export { darkTheme, lightTheme };
