import { daysArray } from "../components/FutureDayForecastCard/daysArray";
import { monthsArray } from "../config/monthsArray";

const getDateNameFromDate = (date) => {
  const newDate = new Date(date);
  const weekday = daysArray[newDate.getDay()];
  const dayDate = `${newDate.getDate()} ${monthsArray[newDate.getMonth()]}`;

  return { weekday, dayDate };
};

export default getDateNameFromDate;
