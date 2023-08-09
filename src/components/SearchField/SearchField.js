import React from "react";
import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import { TextField, InputAdornment } from '@mui/material';

import {ReactComponent as LightIcon} from '../../assets/icons/magnifier_light-theme.svg';
import {ReactComponent as DarkIcon} from '../../assets/icons/magnifier_dark-theme.svg';

import './SearchField.css';
import styles from "./styles";

const SearchField = ({handleLocation, classes}) => {
    const theme = useTheme();

    return (
        <div className='search-field-wrapper'>
            <TextField 
                className={classes.searchInput} 
                placeholder='Search the city' 
                onChange={handleLocation}
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
                            { 
                                theme.palette.background.default === '#FFF' 
                                ?
                                <LightIcon />
                                :
                                <DarkIcon />
                            }
                        </InputAdornment>
                    ),
                }}                
            />
        </div>
    )
}

SearchField.propTypes = {
    handleLocation: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchField);