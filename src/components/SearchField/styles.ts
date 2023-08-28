import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  SearchField__input: {
    width: "360px",
    fontFamily: "Open Sans",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "normal",
    borderRadius: "30px",
    background:
      "linear-gradient(138deg, #00000008 0%, #ffffff17 99.97%, #ffffff1c 99.98%, #ffffff1c 99.99%, #ffffff26 100%)",

    "@media (max-width: 650px)": {
      width: "100%",
    },
  },
});

export default useStyles;
