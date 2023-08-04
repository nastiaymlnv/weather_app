import React from "react";

import {ReactComponent as ClearIcon} from '../assets/weather-icons/Clear.svg';
import {ReactComponent as ClearWindIcon} from '../assets/weather-icons/Clear-wind.svg';
import {ReactComponent as CloudIcon} from '../assets/weather-icons/Cloud.svg';
import {ReactComponent as CloudNightIcon} from '../assets/weather-icons/Cloud-night.svg';
import {ReactComponent as CloudRainbowIcon} from '../assets/weather-icons/Cloud-rainbow.svg';
import {ReactComponent as LightningIcon} from '../assets/weather-icons/Lightning.svg';
import {ReactComponent as PartlyCloudyIcon} from '../assets/weather-icons/Partly-cloudy.svg';
import {ReactComponent as RainIcon} from '../assets/weather-icons/Rain.svg';
import {ReactComponent as RainThunderIcon} from '../assets/weather-icons/Rain-thunder.svg';
import {ReactComponent as RainWindIcon} from '../assets/weather-icons/Rain-wind.svg';
import {ReactComponent as RainyIcon} from '../assets/weather-icons/Rainy.svg';
import {ReactComponent as SnowIcon} from '../assets/weather-icons/Snow.svg';
import {ReactComponent as SnowHeavyIcon} from '../assets/weather-icons/Snow-heavy.svg';
import {ReactComponent as SnowLightIcon} from '../assets/weather-icons/Snow-light.svg';
import {ReactComponent as SunIcon} from '../assets/weather-icons/Sun.svg';
import {ReactComponent as SunRainIcon} from '../assets/weather-icons/Sun-rain.svg';
import {ReactComponent as SunWindIcon} from '../assets/weather-icons/Sun-wind.svg';
import {ReactComponent as ThunderIcon} from '../assets/weather-icons/Thunder.svg';
import {ReactComponent as TyphonIcon} from '../assets/weather-icons/Typhoon.svg';
import {ReactComponent as WindIcon} from '../assets/weather-icons/Wind.svg';

const weatherConditions = [
    {
        "is_day": 1,
        "weatherComponents": {    
            "Sunny": <SunIcon />, 
            "Partly cloudy": <PartlyCloudyIcon />,         
            "Cloudy": <CloudIcon />,         
            "Overcast": <CloudIcon />,         
            "Mist": <CloudRainbowIcon />,         
            "Patchy rain possible": <SunRainIcon />,         
            "Patchy snow possible": <SnowLightIcon />,         
            "Patchy sleet possible": <SnowIcon />,         
            "Patchy freezing drizzle possible": <SnowHeavyIcon />,         
            "Thundery outbreaks possible": <ThunderIcon />,         
            "Blowing snow": <SnowIcon />,         
            "Blizzard": <TyphonIcon />,         
            "Fog": <CloudIcon />,         
            "Freezing fog": <WindIcon />,         
            "Patchy light drizzle": <SunRainIcon />,         
            "Light drizzle": <SunRainIcon />,         
            "Freezing drizzle": <SnowIcon />,         
            "Heavy freezing drizzle": <RainWindIcon />,         
            "Patchy light rain": <RainyIcon />,         
            "Light rain": <RainIcon />,         
            "Moderate rain at times": <SunRainIcon />,         
            "Moderate rain": <SunRainIcon />,         
            "Heavy rain at times": <RainyIcon />,         
            "Heavy rain": <RainIcon />,         
            "Light freezing rain": <RainWindIcon />,         
            "Moderate or heavy freezing rain": <RainWindIcon />,         
            "Light sleet": <SnowLightIcon />,         
            "Moderate or heavy sleet": <SnowHeavyIcon />,         
            "Patchy light snow": <SnowLightIcon />,         
            "Light snow": <SnowLightIcon />,         
            "Patchy moderate snow": <SnowIcon />,         
            "Moderate snow": <SnowIcon />,         
            "Patchy heavy snow": <SnowHeavyIcon />,         
            "Heavy snow": <SnowHeavyIcon />,         
            "Ice pellets": <SnowIcon />,         
            "Light rain shower": <RainIcon />,         
            "Moderate or heavy rain shower": <RainyIcon />,         
            "Torrential rain shower": <RainyIcon />,         
            "Light sleet showers": <SnowLightIcon />,         
            "Moderate or heavy sleet showers": <SnowLightIcon />,         
            "Light snow showers": <SnowLightIcon />,         
            "Moderate or heavy snow showers": <SnowHeavyIcon />,         
            "Light showers of ice pellets": <SnowIcon />,         
            "Moderate or heavy showers of ice pellets": <SnowHeavyIcon />,         
            "Patchy light rain with thunder": <RainThunderIcon />,         
            "Moderate or heavy rain with thunder": <RainThunderIcon />,         
            "Patchy light snow with thunder": <ThunderIcon />,         
            "Moderate or heavy snow with thunder": <RainThunderIcon />             
        }
    },
    {
        "is_day": 0,
        "weatherComponents": {    
            "Clear": <ClearIcon />, 
            "Partly cloudy": <PartlyCloudyIcon />,         
            "Cloudy": <CloudNightIcon />,         
            "Overcast": <CloudNightIcon />,         
            "Mist": <CloudNightIcon />,         
            "Patchy rain possible": <SunRainIcon />,         
            "Patchy snow possible": <SnowLightIcon />,         
            "Patchy sleet possible": <SnowIcon />,         
            "Patchy freezing drizzle possible": <SnowHeavyIcon />,         
            "Thundery outbreaks possible": <ThunderIcon />,         
            "Blowing snow": <SnowIcon />,         
            "Blizzard": <TyphonIcon />,         
            "Fog": <CloudNightIcon />,         
            "Freezing fog": <ClearWindIcon />,         
            "Patchy light drizzle": <SunRainIcon />,         
            "Light drizzle": <SunRainIcon />,         
            "Freezing drizzle": <SnowIcon />,         
            "Heavy freezing drizzle": <RainWindIcon />,         
            "Patchy light rain": <RainyIcon />,         
            "Light rain": <RainIcon />,         
            "Moderate rain at times": <SunRainIcon />,         
            "Moderate rain": <SunRainIcon />,         
            "Heavy rain at times": <RainyIcon />,         
            "Heavy rain": <RainIcon />,         
            "Light freezing rain": <RainWindIcon />,         
            "Moderate or heavy freezing rain": <RainWindIcon />,         
            "Light sleet": <SnowLightIcon />,         
            "Moderate or heavy sleet": <SnowHeavyIcon />,         
            "Patchy light snow": <SnowLightIcon />,         
            "Light snow": <SnowLightIcon />,         
            "Patchy moderate snow": <SnowIcon />,         
            "Moderate snow": <SnowIcon />,         
            "Patchy heavy snow": <SnowHeavyIcon />,         
            "Heavy snow": <SnowHeavyIcon />,         
            "Ice pellets": <SnowIcon />,         
            "Light rain shower": <RainIcon />,         
            "Moderate or heavy rain shower": <RainyIcon />,         
            "Torrential rain shower": <RainyIcon />,         
            "Light sleet showers": <SnowLightIcon />,         
            "Moderate or heavy sleet showers": <SnowLightIcon />,         
            "Light snow showers": <SnowLightIcon />,         
            "Moderate or heavy snow showers": <SnowHeavyIcon />,         
            "Light showers of ice pellets": <SnowIcon />,         
            "Moderate or heavy showers of ice pellets": <SnowHeavyIcon />,         
            "Patchy light rain with thunder": <RainThunderIcon />,         
            "Moderate or heavy rain with thunder": <RainThunderIcon />,         
            "Patchy light snow with thunder": <ThunderIcon />,         
            "Moderate or heavy snow with thunder": <RainThunderIcon />             
        }
    }
]

export default weatherConditions;