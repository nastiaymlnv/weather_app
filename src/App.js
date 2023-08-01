import React, {Component} from 'react';
import axios from 'axios';
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
      console.log(this.state.weatherInfo)
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App">
      </div>
    )
  }
}