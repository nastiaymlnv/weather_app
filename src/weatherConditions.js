import React from "react";

import { ReactComponent as ClearIcon } from "./assets/icons/Clear.svg";
import { ReactComponent as ClearWindIcon } from "./assets/icons/Clear-wind.svg";
import { ReactComponent as CloudIcon } from "./assets/icons/Cloud.svg";
import { ReactComponent as CloudNightIcon } from "./assets/icons/Cloud-night.svg";
import { ReactComponent as CloudRainbowIcon } from "./assets/icons/Cloud-rainbow.svg";
import { ReactComponent as LightningIcon } from "./assets/icons/Lightning.svg";
import { ReactComponent as PartlyCloudyIcon } from "./assets/icons/Partly-cloudy.svg";
import { ReactComponent as RainIcon } from "./assets/icons/Rain.svg";
import { ReactComponent as RainThunderIcon } from "./assets/icons/Rain-thunder.svg";
import { ReactComponent as RainWindIcon } from "./assets/icons/Rain-wind.svg";
import { ReactComponent as RainyIcon } from "./assets/icons/Rainy.svg";
import { ReactComponent as SnowIcon } from "./assets/icons/Snow.svg";
import { ReactComponent as SnowHeavyIcon } from "./assets/icons/Snow-heavy.svg";
import { ReactComponent as SnowLightIcon } from "./assets/icons/Snow-light.svg";
import { ReactComponent as SunIcon } from "./assets/icons/Sun.svg";
import { ReactComponent as SunRainIcon } from "./assets/icons/Sun-rain.svg";
import { ReactComponent as SunWindIcon } from "./assets/icons/Sun-wind.svg";
import { ReactComponent as ThunderIcon } from "./assets/icons/Thunder.svg";
import { ReactComponent as TyphonIcon } from "./assets/icons/Typhoon.svg";
import { ReactComponent as WindIcon } from "./assets/icons/Wind.svg";

const weatherConditions = [
  {
    is_day: 1,
    weatherComponents: {
      Sunny: <SunIcon />,
      "Partly cloudy": <PartlyCloudyIcon />,
      Cloudy: <CloudIcon />,
      Overcast: <CloudIcon />,
      Mist: <CloudRainbowIcon />,
      "Patchy rain possible": <SunRainIcon />,
      "Patchy snow possible": <SnowLightIcon />,
      "Patchy sleet possible": <SnowIcon />,
      "Patchy freezing drizzle possible": <SnowHeavyIcon />,
      "Thundery outbreaks possible": <LightningIcon />,
      "Blowing snow": <SnowIcon />,
      Blizzard: <TyphonIcon />,
      Fog: <CloudIcon />,
      "Freezing fog": <WindIcon />,
      "Patchy light drizzle": <SunRainIcon />,
      "Light drizzle": <SunRainIcon />,
      "Freezing drizzle": <SunWindIcon />,
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
      "Moderate or heavy snow with thunder": <RainThunderIcon />,
    },
  },
  {
    is_day: 0,
    weatherComponents: {
      Clear: <ClearIcon />,
      "Partly cloudy": <PartlyCloudyIcon />,
      Cloudy: <CloudNightIcon />,
      Overcast: <CloudNightIcon />,
      Mist: <CloudNightIcon />,
      "Patchy rain possible": <SunRainIcon />,
      "Patchy snow possible": <SnowLightIcon />,
      "Patchy sleet possible": <SnowIcon />,
      "Patchy freezing drizzle possible": <SnowHeavyIcon />,
      "Thundery outbreaks possible": <LightningIcon />,
      "Blowing snow": <SnowIcon />,
      Blizzard: <TyphonIcon />,
      Fog: <CloudNightIcon />,
      "Freezing fog": <ClearWindIcon />,
      "Patchy light drizzle": <SunRainIcon />,
      "Light drizzle": <SunRainIcon />,
      "Freezing drizzle": <SunWindIcon />,
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
      "Moderate or heavy snow with thunder": <RainThunderIcon />,
    },
  },
];

export default weatherConditions;
