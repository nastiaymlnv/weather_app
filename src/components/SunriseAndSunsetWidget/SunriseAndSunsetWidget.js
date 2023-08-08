import React from "react";
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';
import { Box, Typography } from "@mui/material";

import Sun from '../../assets/img/SunMove-icon.png';

import './SunriseAndSunsetWidget.css';
import styles from "./styles";

const SunriseAndSunsetWidget = ({sunMove, classes}) => {
    const {sunrise, sunset} = sunMove;

    const getTwentyFourHourTime = timeString => { 
        var date = new Date("01/01/1970 " + timeString); 
        return date.getHours() + ':' + date.getMinutes(); 
    }

    const sunriseTimestamp = new Date(`01/01/1970 ${getTwentyFourHourTime(sunrise)}`).getTime();
    const sunsetTimestamp = new Date(`01/01/1970 ${getTwentyFourHourTime(sunset)}`).getTime();

    return (
        <article className='sunMove-container main-container-bg'>
            <Typography variant='h3' className={classes.sunMoveTitle} sx={{pl: '9px', mb: '23px'}}>
                Sunrise and Sunset
            </Typography>
            <Box className={classes.SunMoveAnimationContainer} sx={{px: '15px'}}>
                <div className='sunMove-trajectory'>
                    <span className='sun-container'>
                        <img src={Sun} alt='Sun' className='sun' />
                    </span>
                </div>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Box>
                    <Typography className={classes.Titles}>
                        Sunrise
                    </Typography>
                    <Typography className={classes.Time} sx={{mt: '4px'}}>
                        {getTwentyFourHourTime(sunrise)}
                    </Typography>
                </Box>
                <Box>
                    <Typography className={classes.Titles}>
                        Sunset
                    </Typography>
                    <Typography className={classes.Time} sx={{mt: '4px'}}>
                        {getTwentyFourHourTime(sunset)}
                    </Typography>
                </Box>
            </Box>
        </article>
    )
}

SunriseAndSunsetWidget.propTypes = {
    sunMove: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SunriseAndSunsetWidget);