const today = new Date();
const minutesFormat =
  today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();

export { today, minutesFormat };
