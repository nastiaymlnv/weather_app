import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { 
  CircularProgress,
  Box,
  Typography
} from '@mui/material';

import SearchField from './components/SearchField/SearchField';
import AllDayForecastCard from './components/AllDayForecastCard';
import FutureDayForecastCard from './components/FutureDayForecastCard/FutureDayForecastCard';

import './assets/reset.css';
import './App.css';

const App = () => {
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [targetLocation, setTargetLocation] = useState('Vinnitsa');

  const {location, current, forecast} = weatherInfo;

  const apiKey = '81949147633542bcaba75017230108';
  const days = 7;

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData(targetLocation);
    }, 500)

    return () => clearTimeout(timer)
  }, [targetLocation])

  const fetchData = async (country) => {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${country}&days=${days}&aqi=no&alerts=no`);
      setWeatherInfo(response.data)
    } catch (error) {
      console.log(error);
    }
  }  

  const checkLocation = (targetValue) => {
    targetValue.length !== 0 && /^[a-zA-Z]*$/.test(targetValue) && setTargetLocation(targetValue);
  }

  const handleLocation = (e) => {
    checkLocation(e.target.value);
  }

  if (!location) {
    return (
      <Box sx={{
        width: '100dvw', 
        height: '100dvh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'}}
      >
        <CircularProgress />
      </Box>
      )
  }

  return (
    <Box sx={{pt: '29px', px: '100px', pb: '57px'}}>
      <header className='header-container'>
        <Typography variant='h1'>
          {`${location.name}, ${location.country}`}
        </Typography>
        <SearchField handleLocation={handleLocation} />
      </header>
      <AllDayForecastCard currentDay={current} fewDaysForecast={forecast} />
      <section className='few-days-weather-container'>
        {
          forecast.forecastday.slice(1).map(({date, day}) => {
            return (
              <FutureDayForecastCard 
                key={uuidv4()} 
                date={date} 
                dayInfo={day} 
              />                
            )
          })
        }
      </section>
    </Box>
  )
}

export default App;