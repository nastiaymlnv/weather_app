import React from "react";
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';
import { Box, Typography } from "@mui/material";
import { 
    List,
    ListItemText 
} from "@mui/material";

import styles from './styles.js';
import './HumidityWidget.css';

const HumidityWidget = ({humidity, classes}) => {
    return (
        <div className='humidity-wrapper'>
            <div className='humidity-chart'>

            </div>
            <List className={classes.humidityLegend} sx={{display: 'flex', justifyContent: 'space-between', p: '0'}}>
                <ListItemText className={classes.humidityLevel} sx={{fontSize: '12px'}} disableTypography> 
                    0 
                </ListItemText>
                <ListItemText className={classes.humidityLevel} sx={{fontSize: '12px'}} disableTypography> 
                    25
                </ListItemText>
                <ListItemText className={classes.humidityLevel} sx={{fontSize: '12px'}} disableTypography> 
                    50
                </ListItemText>
                <ListItemText className={classes.humidityLevel} sx={{fontSize: '12px'}} disableTypography> 
                    75
                </ListItemText>
                <span className='max-humidity'> 
                    100
                </span>
            </List>
        </div>
    )
}

HumidityWidget.propTypes = {
    humidity: PropTypes.number.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HumidityWidget);