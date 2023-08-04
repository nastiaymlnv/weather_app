import React from "react";
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';
import { Typography } from "@mui/material";

import { monthsArray } from "../../config/monthsArray";
import { daysArray } from "../../config/daysArray";

import './FutureDayForecastCard.css';

const styles = theme => ({
    futureForecastTitle: {
        fontSize: '20px',
        fontWeight: 600,
        marginBottom: '4px'
    },
    futureForecastItem: {
        fontFamily: 'Inter',
        fontSize: '24px',
        fontWeight: 500,
        lineHeight: 'normal'
    }
});

const FutureDayForecastCard = ({date, dayInfo, classes}) => {
    const {condition, maxtemp_c, mintemp_c} = dayInfo;
    const newDate = new Date(date);
    const weekday = daysArray[newDate.getDay()];
    const dayDate = `${newDate.getDate()} ${monthsArray[newDate.getMonth()]}`;

    return (
        <article className='future-day-forecast-card main-container-bg'>
            <div className='future-day-forecast-card__title'>                
                <Typography variant='h3' className={classes.futureForecastTitle}>
                    {weekday}
                </Typography>
                <Typography>
                    {dayDate}
                </Typography>
            </div>
            <div className='future-day-forecast-card__info'>
                <div className='future-day-forecast-card__info-item'>
                    <img src={condition.icon} />
                </div>
                <span className='future-day-forecast-card__temperature-wrapper'>
                    <Typography className={classes.futureForecastItem} sx={{mb: '4px'}}>
                        {maxtemp_c > 0 && `+${Math.floor(maxtemp_c)}`}°
                    </Typography>
                    <Typography className={classes.futureForecastItem} sx={{color: '#686868'}}>
                        {mintemp_c > 0 && `+${Math.floor(mintemp_c)}`}°
                    </Typography>
                </span>                
            </div>            
        </article>
    )
}

FutureDayForecastCard.propTypes = {
    date: PropTypes.string.isRequired,
    dayInfo: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FutureDayForecastCard);