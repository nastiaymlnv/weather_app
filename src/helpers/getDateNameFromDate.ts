import { daysArray } from "../components/FutureDayForecastCard/daysArray";
import { monthsArray } from "../config/months/monthsArray";

const getDateNameFromDate = (date: string) => {
  const newDate = new Date(date);
  const weekday = daysArray[newDate.getDay()];
  const dayDate = `${newDate.getDate()} ${monthsArray[newDate.getMonth()]}`;

  return { weekday, dayDate };
};

export default getDateNameFromDate;
