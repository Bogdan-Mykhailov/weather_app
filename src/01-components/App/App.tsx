import React, {useState} from 'react';
import s from './App.module.css';
import {Search} from "../01-Search/Search";
import {CurrentWeather} from "../02-Current-weather/CurrentWeather";
import {WEATHER_API_KEY, WEATHER_API_URL} from "../../03-dal/weather-api";

export type CurrentWeatherType = {
  base: string
  city: string
  clouds: {all: number}
  cod: number
  coord: {lon: number, lat: number}
  dt: number
  id: number
  main: {feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number}
  name: string
  sys: {type: number, id: number, country: string, sunrise: number, sunset: number}
  timezone: number
  visibility: number
  weather: [{id: number, main: string, description: string, icon: string}]
  wind: {speed: number, deg: number, gust: number}
}

export const App = () => {

  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherType>()
  const [forecast, setForecast] = useState<CurrentWeatherType>()

  const handleOnSearchChange = (searchData: any) => {
    const [lat, lon] = searchData.value.split(' ')
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (res) => {
       const weatherResponse = await res[0].json()
       const forecastResponse = await res[1].json()

        setCurrentWeather({city: searchData.label, ...weatherResponse})
        setForecast({city: searchData.label, ...forecastResponse})
      })
      .catch((err) => console.log(err))
  }

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className={s.app}>
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
    </div>
  )
};