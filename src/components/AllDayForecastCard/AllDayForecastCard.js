import React from "react";
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import ForecastInfoCards from "../ForecastInfoCards/ForecastInfoCards";

import { monthsArray } from "../../config/monthsArray";
import { forecastIndicesList, hoursForecast } from "../../config/dayForecastData";

import PartlyCloudyIcon from '../../assets/img/Partly-cloudy.svg';

import './AllDayForecastCard.css';

const AllDayForecastCard = (props) => {    
    const {current, forecast} = props.forecast;
    const allHoursInfoArr = forecast.forecastday[0].hour;
    const today = new Date();
    const currentDate = `${today.getDate()} ${monthsArray[today.getMonth()]}, ${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`;

    return (
        <div className='day-forecast-wrapper main-container-bg'>
            <h1 className='day-forecast-title'>
                {currentDate}
            </h1>
            <section className='day-forecast-content'>
                <section className='day-forecast-weather'>
                    <img className='day-forecast-weather__img' src={PartlyCloudyIcon} alt='partly cloudy' />
                    <p className='day-forecast-weather__temperature'>
                        {current.temp_c > 0 && `+${Math.floor(current.temp_c)}`}°C
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
    current: PropTypes.object.isRequired,
    forecast: PropTypes.object.isRequired,
};

export default AllDayForecastCard;