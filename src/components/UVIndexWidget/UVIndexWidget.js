import React from "react";
import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import { 
    Box, 
    Typography,
    List,
    ListItemText 
} from "@mui/material";

import "./UVIndexWidget.css";
import styles from "./styles";

const UVIndexWidget = ({uv, classes}) => {
    const theme = useTheme();

    const generateAngleForCssAnimation = (uvLevel) => {
        const percent = uvLevel * 100 / 12;
        const angle = percent * 180 / 100;

        return `${angle}deg`;
    }

    return (
        <article className='UV-container main-container-bg'>
            <Box sx={{display: 'flex', justifyContent: 'space-between', px: '20px', mb: '23px'}}>
                <Typography variant='h3' className={classes.UVTitle}>
                    UV Index
                </Typography>
                <Typography variant='h3' className={classes.UVTitle}>
                    {uv} UV
                </Typography>
            </Box>
            <div className='trajectory-container'>
                <div className="trajectory-zonecircle" style={{'--uv': generateAngleForCssAnimation(uv)}}>
                </div>
                <div className="trajectory-bg-1">
                </div>
                <div 
                    className="trajectory-bg-2" 
                    style={{'--bg': theme.palette.background.default === '#FFF'? '#fff' : 'rgba(8, 3, 56, 0.7)'}}
                >
                    <List className={classes.UVLevelsPanel}>
                        <ListItemText className={classes.UVLevel} sx={{left: '5px', bottom: '-2px'}} disableTypography> 
                            0 
                        </ListItemText>
                        <ListItemText className={classes.UVLevel} sx={{left: '20px', bottom: '45px'}} disableTypography> 
                            2 
                        </ListItemText>
                        <ListItemText className={classes.UVLevel} sx={{left: '70px', bottom: '95px'}} disableTypography> 
                            4 
                        </ListItemText>
                        <ListItemText className={classes.UVLevel} sx={{left: '50%', top: '-5px'}} disableTypography> 
                            6 
                        </ListItemText>
                        <ListItemText className={classes.UVLevel} sx={{right: '70px', bottom: '95px'}} disableTypography> 
                            8 
                        </ListItemText>
                        <ListItemText className={classes.UVLevel} sx={{right: '20px', bottom: '45px'}} disableTypography> 
                            10 
                        </ListItemText>
                        <ListItemText className={classes.UVLevel} sx={{right: '5px', bottom: '-2px'}} disableTypography> 
                            12 
                        </ListItemText>
                    </List>
                </div>
            </div>
        </article>
    )
}

UVIndexWidget.propTypes = {
    uv: PropTypes.number.isRequired,
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(UVIndexWidget);