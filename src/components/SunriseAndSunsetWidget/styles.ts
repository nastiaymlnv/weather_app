import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  "Widget-legend": {
    display: "flex",
    justifyContent: "space-between",
  },
  "Widget-legend__title": {
    color: "#FFE55F",
  },
  "Widget-legend__time": {
    textAlign: "center" as const,
    marginTop: "4px",
  },
});

export default useStyles;
