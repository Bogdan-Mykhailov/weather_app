import React from 'react';
import s from './Forecast.module.css'
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton
} from "react-accessible-accordion";

const WEEK_DAYS =
  [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]

export const Forecast: React.FC<ForecastPropsType> = (
  {data}
) => {

  //За допомогою цієї фн. я вказую що якщо сьогодні середа,
  // тоді відображаються дні тижня від четверга
  // маю на увазі погода на тиждень

  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (

    <>
      <label className={s.title}>Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className={s.dailyItem}>
                  <img className={s.icons} src={`icons/${item.weather[0].icon}.png`} alt="weatherIcon"/>
                  <label className={s.day}>{forecastDays[idx]}</label>
                  <label className={s.description}>{item.weather[0].description}</label>
                  <label className={s.minMax}>
                    {Math.round(item.main.temp_min)} /
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className={s.dailyDetailsGrid}>
                <div className={s.dailyDetailsGridItem}>
                  <label>Feels like:</label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
                <div className={s.dailyDetailsGridItem}>
                  <label>Pressure:</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className={s.dailyDetailsGridItem}>
                  <label>Humidity:</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className={s.dailyDetailsGridItem}>
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className={s.dailyDetailsGridItem}>
                  <label>Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className={s.dailyDetailsGridItem}>
                  <label>Sea level:</label>
                  <label>{item.main.sea_level} m</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

//types
type CityType = {
  coord: CoordType
  country: string
  id: number
  name: string
  population: number
  sunrise: number
  sunset: number
  timezone: number
}
type CoordType = {
  lat: number
  lon: number
}
type ListItemType = {
  clouds: { all: number }
  dt: number
  dt_txt: string
  main: {
    feels_like: number
    grnd_level: number
    humidity: number
    pressure: number
    sea_level: number
    temp: number
    temp_kf: number
    temp_max: number
    temp_min: number
  }
  pop: number
  sys: { pod: string }
  visibility: number
  weather: [{ id: number, main: string, description: string, icon: string }]
  wind: { speed: number, deg: number, gust: number }
}
export type ForecastDataType = {
  city: CityType
  cnt: number
  cod: string
  list: ListItemType[]
  message: number
}
type ForecastPropsType = {
  data: ForecastDataType
}
