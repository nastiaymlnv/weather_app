import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        background: {
            default: '#080338'
        }
    },
    input: {
        color: '#FFF',
        '&::placeholder': {
            color: '#C0C0C0',
        },
    },
    typography: {
        fontFamily: ['Open Sans'].join(','),
        h1: {
            color: '#FFF',
            fontSize: '24px'
        },
        h2: {
            color: '#FFF',
            fontFamily: 'Inter',
            fontSize: '70px',
            fontWeight: 400
        },       
        body1: {
            color: '#FFF',
        },
        body2: {
            color: '#C0C0C0',
            fontSize: '18px',
        },
    }
    });

const lightTheme = createTheme({
    palette: {
        background: {
            default: '#FFF'
        }
    },
    typography: {
        fontFamily: ['Open Sans'].join(','),
        h1: {
            color: '#080338',
            fontSize: '24px'
        },
        h2: {
            color: '#080338',
            fontFamily: 'Inter',
            fontSize: '70px',
            fontWeight: 400
        },       
        body1: {
            color: '#080338',
        },
        body2: {
            color: '#C0C0C0',
            fontSize: '18px',
        },
    }
});

export {darkTheme, lightTheme};