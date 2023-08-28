import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  AllDayForecastCard: {
    fontFamily: "Open Sans",
    fontSize: "24px",
    lineHeight: "normal",
    width: "max-content",
    margin: "31px auto",
    marginBottom: 0,
    padding: "21px 8px 22px 15px",
    borderRadius: "30px",
    background:
      "linear-gradient(138deg, #00000008 0%, #ffffff17 99.97%, #ffffff1c 99.98%, #ffffff1c 99.99%, #ffffff26 100%)",

    "@media (max-width: 910px)": {
      width: "100%",
    },
  },
  "AllDayForecastCard-content__main-weather-temperature": {
    marginTop: "35px",

    "@media (max-width: 1180px)": {
      marginTop: "20px",
      marginBottom: "35px",
    },

    "@media (max-width: 600px)": {
      fontSize: "55px",
    },
  },
  AllDayForecastCard__list: {
    marginRight: "19px",

    "@media (max-width: 910px)": {
      marginRight: "5px",
    },
  },
  "AllDayForecastCard__list-item": {
    fontSize: "18px",
    lineHeight: "normal",
    color: "#C0C0C0",
    textAlign: "right" as const,
    marginTop: "13px",
    marginBottom: "8px",

    "@media (max-width: 910px)": {
      marginTop: "15px",
      marginBottom: "0",
      fontSize: "16px",
    },

    "@media (max-width: 900px)": {
      marginTop: "3px",
    },
  },
});

export default useStyles;
