import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const getBaseURL = (city) =>
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=55b7bce44b262858d3201b409b5dcd65`;

  const [inputValue, setInputValue] = useState('Warsaw');
  const [data, setData] = useState();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const url = getBaseURL(inputValue);
      axios
        .get(url)
        .then((response) => setData(response.data))
        .catch(() => setData());
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={inputValue} onChange={handleChange} />
        {data && (
          <div className="card">
            <p>Temperature: {Math.round((data.main.temp - 273.15) * 100) / 100} &#8451;</p>
            <p>
              Feels like: {Math.round((data.main.feels_like - 273.15) * 100) / 100} &#8451;
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt=""
            />
            <p className="none">{data.weather[0].main}</p>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
