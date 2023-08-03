import React, {Component} from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

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
    const {location, forecast} = this.state.weatherInfo;

    if (!location) {
      return <div>Loading...</div>;
    }

    return (
      <div className="app-container">
        <header className='header-container'>
          <div className='header__location-name'>
            {`${location.name}, ${location.country}`}
          </div>
          <SearchField />
        </header>
        <AllDayForecastCard forecast={this.state.weatherInfo} />
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
      </div>
    )
  }
}