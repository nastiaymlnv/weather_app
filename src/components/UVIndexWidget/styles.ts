import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  "UVIndexWidget-levels-list": {
    width: "297px",
    height: "131px",
    borderBottom: "none",
    borderRadius: "12em 12em 0 0",
    position: "relative" as const,
    overflow: "hidden",
  },
  "UVIndexWidget-levels-list__item": {
    position: "absolute" as const,
    fontFamily: "Inter",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "normal",
  },
});

export default useStyles;
