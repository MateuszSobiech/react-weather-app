import React, { useEffect } from 'react';
import { useWeather } from '../hooks/useWeather';
import { useSelector } from 'react-redux';
import styles from '../App.module.scss';

const Card = () => {
  const inputValue = useSelector((state) => state);
  const { getWeatherData, data } = useWeather();

  useEffect(() => {
    // console.log('a');

    const timer = setTimeout(() => {
      getWeatherData(inputValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue, getWeatherData]);

  return (
    <div className={styles.card}>
      {data.name ? (
        <div>
          <p>Temperature: {data.temp} &#8451;</p>
          <p>Feels like: {data.feels} &#8451;</p>
          <img src={data.iconSrc} alt="" />
          <p className={styles.none}>{data.name}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Card;
