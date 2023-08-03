import React from "react";
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import ForecastInfoCards from "../ForecastInfoCards/ForecastInfoCards";

import { monthsArray } from "../../config/monthsArray";
import { forecastIndicesList, hoursForecast } from "../../config/dayForecastData";

// import PartlyCloudyIcon from '../../assets/img/Partly-cloudy.svg';

import './AllDayForecastCard.css';

const AllDayForecastCard = (props) => {   
    const {currentDay, fewDaysForecast} = props;
    console.log(currentDay)
    const allHoursInfoArr = fewDaysForecast.forecastday[0].hour;
    const today = new Date();
    const minutesFormat = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();
    const currentDate = `${today.getDate()} ${monthsArray[today.getMonth()]}, ${today.getFullYear()} ${today.getHours()}:${minutesFormat}`;

    return (
        <div className='day-forecast-wrapper main-container-bg'>
            <h1 className='day-forecast-title'>
                {currentDate}
            </h1>
            <section className='day-forecast-content'>
                <section className='day-forecast-weather'>
                    <div className='day-forecast-weather__img-wrapper'>
                        <img className='day-forecast-weather__img' src={currentDay.condition.icon} alt='partly cloudy' />
                    </div>
                    <p className='day-forecast-weather__temperature'>
                        {currentDay.temp_c > 0 && `+${Math.floor(currentDay.temp_c)}`}°C
                    </p>
                </section>
                <section className='forecast-hourly'>
                    <ul className='forecast-indices-list'>
                        {forecastIndicesList.map(forecastItem =>
                            {
                                return (
                                    <li className='forecast-indices-list__item' key={uuidv4()}> 
                                        {forecastItem}
                                    </li>
                                )
                            }
                        )}
                    </ul>
                    <section className='forecast-hourly__wrapper'>
                        {ForecastInfoCards(allHoursInfoArr, hoursForecast)}
                    </section>
                </section>
            </section>
        </div>
    )
}

AllDayForecastCard.propTypes = {
    currentDay: PropTypes.object.isRequired,
    fewDaysForecast: PropTypes.object.isRequired,
};

export default AllDayForecastCard;