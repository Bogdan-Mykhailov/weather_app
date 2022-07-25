import React from 'react';
import s from './App.module.css';
import {Search} from "../01-Search/Search";
import {CurrentWeather} from "../02-Current-weather/CurrentWeather";

export const App = () => {

  const handleOnSearchChange = (searchData: string) => {
    console.log(searchData)
  }

  return (
    <div className={s.app}>
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentWeather/>
    </div>
  )
};