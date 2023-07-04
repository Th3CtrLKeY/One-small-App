import React, { useState } from 'react';
import SearchBox from './SearchBox';
import WeatherInfo from './WeatherInfo';

const api = {
  key: "4f8e795dcd6dbf7b9f5276bff095ffc1",
  base: "https://api.openweathermap.org/data/2.5/"
};

function Weather() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&appid=${api.key}&units=metric`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className={(typeof weather.main !== 'undefined') ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <SearchBox query={query} setQuery={setQuery} search={search} />
        {(typeof weather.main !== 'undefined') ? <WeatherInfo weather={weather} dateBuilder={dateBuilder} /> : ''}
      </main>
    </div>
  );
}

export default Weather;