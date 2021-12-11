import React, { useEffect } from 'react';
import { useWeather } from '../hooks/useWeather';
import { useSelector } from 'react-redux';
import { Wrapper, Paragraph } from './Card.styles';

const Card = () => {
  const inputValue = useSelector((state) => state);
  const { getWeatherData, data } = useWeather();

  useEffect(() => {
    const timer = setTimeout(() => {
      getWeatherData(inputValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue, getWeatherData]);

  return (
    <Wrapper>
      {data.name ? (
        <div>
          <p>Temperature: {data.temp} &#8451;</p>
          <p>Feels like: {data.feels} &#8451;</p>
          <img src={data.iconSrc} alt="" />
          <Paragraph>{data.name}</Paragraph>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Wrapper>
  );
};

export default Card;
