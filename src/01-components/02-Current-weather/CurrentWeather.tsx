import React from 'react';
import s from './CurrentWeather.module.css'
import sunny from '../../04-assets/01d.png'

export const CurrentWeather = () => {
  return (
    <div className={s.weather}>
      <div className={s.top}>
        <div>
          <p className={s.city}>Vinnytsia</p>
          <p className={s.weatherDescription}>Sunny</p>
        </div>
        <img src={sunny} alt="sunny" className={s.weatherIcons}/>
      </div>
      <div className={s.bottom}>
        <p className={s.temperature}>26°C</p>
        <div className={s.details}>
          <div className={s.parameterRow}>
            <span className={`${s.parameterLabel} ${s.top}`}>Details</span>
          </div>
          <div className={s.parameterRow}>
            <span className={s.parameterLabel}>Feels like</span>
            <span className={s.parameterValue}>29°C</span>
          </div>
          <div className={s.parameterRow}>
            <span className={s.parameterLabel}>Wind</span>
            <span className={s.parameterValue}>2 m/s</span>
          </div>
          <div className={s.parameterRow}>
            <span className={s.parameterLabel}>Humidity</span>
            <span className={s.parameterValue}>15%</span>
          </div>
          <div className={s.parameterRow}>
            <span className={s.parameterLabel}>Pressure</span>
            <span className={s.parameterValue}>15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};