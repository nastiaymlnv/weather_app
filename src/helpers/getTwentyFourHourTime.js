const getTwentyFourHourTime = (timeString) => {
    const date = new Date("01/01/1970 " + timeString);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    if (hours < 10) {
        return `0${hours}:${(minutes < 10) ? '0' + minutes : minutes}`;
    }
    return `${hours}:${minutes}`;
};

export default getTwentyFourHourTime;