import axios from 'axios';
import { useState, useCallback } from 'react';

export const useWeather = () => {
  const getBaseURL = (city) =>
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=55b7bce44b262858d3201b409b5dcd65`;

  const [data, setData] = useState();

  const getWeatherData = useCallback((city) => {
    const url = getBaseURL(city);
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch(() => setData());
  }, []);

  return {
    getWeatherData,
    data: {
      temp: getDegreesCelsius(data?.main.temp),
      feels: getDegreesCelsius(data?.main.feels_like),
      iconSrc: getIconSrc(data?.weather[0].icon),
      name: data?.weather[0].main,
    },
  };
};

function getDegreesCelsius(number) {
  return Math.round((number - 273.15) * 100) / 100;
}

function getIconSrc(icon) {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}
