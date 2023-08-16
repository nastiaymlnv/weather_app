const getTwentyFourHourTime = (timeString) => {
    var date = new Date("01/01/1970 " + timeString);
    return date.getHours() + ":" + date.getMinutes();
};

export default getTwentyFourHourTime;