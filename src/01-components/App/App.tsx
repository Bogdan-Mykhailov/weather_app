import React from 'react';
import s from './App.module.css';
import {Search} from "../01-Search/Search";

export const App = () => {

  const handleOnSearchChange = (searchData: string) => {
    console.log(searchData)
  }

  return (
    <div className={s.app}>
      <Search onSearchChange={handleOnSearchChange}/>
    </div>
  )
};