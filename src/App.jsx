import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import { useWeather } from './hooks/useWeather';

const App = () => {
  const [inputValue, setInputValue] = useState('Warsaw');
  const { getWeatherData, data } = useWeather();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getWeatherData(inputValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue, getWeatherData]);

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <input type="text" value={inputValue} onChange={handleChange} />
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
      </header>
    </div>
  );
};

export default App;
