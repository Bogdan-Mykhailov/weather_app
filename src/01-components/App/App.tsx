import React, {useState} from 'react';
import s from './App.module.css';
import {Search} from "../01-Search/Search";
import {CurrentWeather, CurrentWeatherDataType} from "../02-Current-weather/CurrentWeather";
import {WEATHER_API_KEY, WEATHER_API_URL} from "../../03-dal/weather-api";
import {Forecast, ForecastDataType} from "../03-Forecast/Forecast";

export const App = () => {

  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherDataType>()
  const [forecast, setForecast] = useState<ForecastDataType>()

  const handleOnSearchChange = (searchData: any) => {
    const [lat, lon] = searchData.value.split(' ')
    const currentWeatherFetch =
      fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastFetch =
      fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (res) => {
        const weatherResponse = await res[0].json()
        const forecastResponse = await res[1].json()

        setCurrentWeather({city: searchData.label, ...weatherResponse})
        setForecast({city: searchData.label, ...forecastResponse})
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className={s.app}>
      <div className={s.search}>
        <Search onSearchChange={handleOnSearchChange}/>
      </div>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      <div className={s.forecast}>
        {forecast && <Forecast data={forecast}/>}
      </div>
    </div>
  )
};