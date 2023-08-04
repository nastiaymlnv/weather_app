import React from "react";
import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import { TextField, InputAdornment } from '@mui/material';

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