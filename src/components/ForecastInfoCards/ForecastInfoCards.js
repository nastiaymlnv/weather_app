import React from "react";
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { withStyles } from '@mui/styles';
import { Typography } from "@mui/material";

import hoursForecast from "./hoursForecast";

import './ForecastInfoCards.css';
import styles from "./styles";

const HourForecast = (hoursInfoArr, data, returnIconComponent) => {
    const hourForecast = hoursInfoArr[data];
    const {
        time, 
        is_day,
        condition,
        temp_c, 
        feelslike_c,
        pressure_mb, 
        humidity, 
        wind_kph} = hourForecast;   
    const hour = new Date(time).getHours();

    return (
        <section className='part-day-forecast-card__item-wrapper'>
            <Typography sx={{fontSize: '20px'}}>
                {hour}:00
            </Typography>
            <div className='part-day-forecast-card__item-img-wrapper'>
                {returnIconComponent(is_day, condition.text)}
            </div>
            <Typography sx={{mt: '16px', fontSize: '18px', fontWeight: 600}}>
                {temp_c > 0 && `+${Math.floor(temp_c)}`}°
            </Typography>
            <Typography sx={{mt: '16px', fontSize: '18px', fontWeight: 600}}>
                {feelslike_c > 0 && `+${Math.floor(feelslike_c)}`}°
            </Typography>
            <Typography sx={{mt: '16px', fontSize: '18px', fontWeight: 600}}>
                {pressure_mb}
            </Typography>
            <Typography sx={{mt: '16px', fontSize: '18px', fontWeight: 600}}>
                {humidity}
            </Typography>
            <Typography sx={{mt: '16px', fontSize: '18px', fontWeight: 600}}>
                {wind_kph}
            </Typography>
        </section>
    )
}

const ForecastInfoCards = ({allHoursInfoArr, returnIconComponent, classes}) => {

    return hoursForecast.map(dayPart => 
        {
            return (
                <section key={uuidv4()} className='part-day-forecast-card'>
                    <Typography 
                        sx={{fontSize: '24px'}} 
                        className={classes.partDayForecastTitle}
                    >
                        {dayPart[0]}
                    </Typography>
                    <div className='part-day-forecast-card__hours'>
                        {HourForecast(allHoursInfoArr, dayPart[1], returnIconComponent, classes)}
                        {HourForecast(allHoursInfoArr, dayPart[2], returnIconComponent, classes)}
                    </div>
                </section>
            )
        }
    )        
}

ForecastInfoCards.propTypes = {
    allHoursInfoArr: PropTypes.array.isRequired,
    returnIconComponent: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ForecastInfoCards);