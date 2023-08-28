import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  "SunriseAndSunsetWidget-legend": {
    display: "flex",
    justifyContent: "space-between",
  },
  "SunriseAndSunsetWidget-legend__title": {
    color: "#FFE55F",
  },
  "SunriseAndSunsetWidget-legend__time": {
    textAlign: "center" as const,
    marginTop: "4px",
  },
});

export default useStyles;
