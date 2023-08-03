import React, {Component} from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import SearchField from './components/SearchField/SearchField';
import AllDayForecastCard from './components/AllDayForecastCard';
import FutureDayForecastCard from './components/FutureDayForecastCard/FutureDayForecastCard';

import './assets/reset.css';
import './assets/fonts/fonts.css';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {weatherInfo: []};
  }  

  apiKey = '81949147633542bcaba75017230108';
  country = 'Vinnitsa';
  days = 7;

  async componentDidMount() {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${this.country}&days=${this.days}&aqi=no&alerts=no`);
      this.setState({weatherInfo: response.data});
      console.log(this.state.weatherInfo);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {location, current, forecast} = this.state.weatherInfo;

    if (!location) {
      return <CircularProgress />
    }

    return (
      <Box sx={{pt: '29px', px: '100px', pb: '57px'}}>
        <header className='header-container'>
          <Typography variant='h1'>
            {`${location.name}, ${location.country}`}
          </Typography>
          <SearchField />
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
}