import React from 'react';
import s from './App.module.css';
import {Search} from "../01-Search/Search";

export const App = () => (
  <div className={s.app}>
    <Search/>
  </div>
);