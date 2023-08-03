import React from "react";
import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import {ReactComponent as LightIcon} from '../../assets/img/magnifier_light-theme.svg';
import {ReactComponent as DarkIcon} from '../../assets/img/magnifier_dark-theme.svg';

import './SearchField.css';

const styles = theme => ({
    searchInput: {
        width: '360px',        
        fontFamily: 'Open Sans',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: 'normal',
        borderRadius: '30px',
        background: 'linear-gradient(138deg, #00000008 0%, #ffffff17 99.97%, #ffffff1c 99.98%, #ffffff1c 99.99%, #ffffff26 100%)',
    }
});

export const SearchField = ({classes}) => {
    const theme = useTheme();

    return (
        <div className='search-field-wrapper'>
            {/* <img className='search-icon' src={icon}  /> */}
            <TextField 
                sx={{
                    "& .MuiOutlinedInput-root": {
                        "& > fieldset": {
                            border: "none"
                        }
                    },
                }} 
                InputProps={{ style: theme.input,
                    startAdornment: (
                        <InputAdornment position="start" sx={{pr: '5px', mb: '4px'}}>
                            { theme.palette.background.default === '#FFF' ?
                                <LightIcon />
                                :
                                <DarkIcon />
                            }
                        </InputAdornment>
                    ),
                }}
                className={classes.searchInput} 
                type='text' placeholder='Search the city' 
            />
        </div>
    )
}

SearchField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchField);