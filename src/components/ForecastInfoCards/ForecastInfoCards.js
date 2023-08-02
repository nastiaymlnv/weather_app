import React from "react";
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import './ForecastInfoCards.css';

const HourForecast = (hoursInfoArr, data) => {
    const hourForecast = hoursInfoArr[data];
    const {
        time, 
        condition,
        temp_c, 
        feelslike_c,
        pressure_mb, 
        humidity, 
        wind_kph} = hourForecast;   
    const hour = new Date(time).getHours();

    return (
        <section className='part-day-forecast-card__item-wrapper'>
            <div className='part-day-forecast-card__item part-day-forecast-card__item_time'>
                {hour}:00
            </div>
            <div className='part-day-forecast-card__item part-day-forecast-card__item_img'>
                <img src={condition.icon} alt={condition.text}/>
            </div>
            <div className='part-day-forecast-card__item'>
                {temp_c > 0 && `+${Math.floor(temp_c)}`}°
            </div>
            <div className='part-day-forecast-card__item'>
                {feelslike_c > 0 && `+${Math.floor(feelslike_c)}`}°
            </div>
            <div className='part-day-forecast-card__item'>
                {pressure_mb}
            </div>
            <div className='part-day-forecast-card__item'>
                {humidity}
            </div>
            <div className='part-day-forecast-card__item'>
                {wind_kph}
            </div>
        </section>
    )
}

const ForecastInfoCards = (hoursInfoArr, hours) => {

    return hours.map(dayPart => 
        {
            return (
                <section key={uuidv4()} className='part-day-forecast-card'>
                    <h1 className='part-day-forecast-card__title'>
                        {dayPart[0]}
                    </h1>
                    <div className='part-day-forecast-card__hours'>
                        {HourForecast(hoursInfoArr, dayPart[1])}
                        {HourForecast(hoursInfoArr, dayPart[2])}
                    </div>
                </section>
            )
        }
    )        
}

ForecastInfoCards.propTypes = {
    hoursInfoArr: PropTypes.object.isRequired,
    hours: PropTypes.object.isRequired,
};

export default ForecastInfoCards;