import React from "react";
import PropTypes from 'prop-types';

import { monthsArray } from "../../config/monthsArray";
import { daysArray } from "../../config/daysArray";

import './FutureDayForecastCard.css';

const FutureDayForecastCard = ({date, dayInfo}) => {
    const {condition, maxtemp_c, mintemp_c} = dayInfo;
    const newDate = new Date(date);
    const weekday = daysArray[newDate.getDay()];
    const dayDate = `${newDate.getDate()} ${monthsArray[newDate.getMonth()]}`;

    return (
        <article className='future-day-forecast-card main-container-bg'>
            <div className='future-day-forecast-card__title'>                
                <h1 className='future-day-forecast-card__weekday'>
                    {weekday}
                </h1>
                <p className='future-day-forecast-card__date'>
                    {dayDate}
                </p>
            </div>
            <div className='future-day-forecast-card__info'>
                <div className='future-day-forecast-card__info-item'>
                    <img src={condition.icon} />
                </div>
                <span className='future-day-forecast-card__temperature-wrapper'>
                    <p className='future-day-forecast-card__info-item future-day-forecast-card__temperature_max'>
                        {maxtemp_c > 0 && `+${Math.floor(maxtemp_c)}`}°
                    </p>
                    <p className='future-day-forecast-card__info-item future-day-forecast-card__temperature_min'>
                        {mintemp_c > 0 && `+${Math.floor(mintemp_c)}`}°
                    </p>
                </span>                
            </div>            
        </article>
    )
}

FutureDayForecastCard.propTypes = {
    date: PropTypes.string.isRequired,
    dayInfo: PropTypes.object.isRequired,
};

export default FutureDayForecastCard;