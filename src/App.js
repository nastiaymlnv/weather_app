import React, {Component} from 'react';
import axios from 'axios';

import SearchField from './components/SearchField/SearchField';
import AllDayForecastCard from './components/AllDayForecastCard';

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

  async componentDidMount() {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${this.country}&days=1&aqi=no&alerts=no`);
      this.setState({weatherInfo: response.data});
      console.log(this.state.weatherInfo);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {location} = this.state.weatherInfo;

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
      </div>
    )
  }
}