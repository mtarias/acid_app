'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestPage from './components/test';
import CityList from './components/CityList';

let cities = [{ 'id': 1, 'cityname': "Santiago", 'temperature': "31°C", 'citytime': "18:52", 'weather': "sun.png" },
  { 'id': 2, 'cityname': "Zurich", 'temperature': "-15°C", 'citytime': "22:52", 'weather': "sun.png" },
  { 'id': 3, 'cityname': "Auckland", 'temperature': "16°C", 'citytime': "10:52", 'weather': "sun.png" },
  { 'id': 4, 'cityname': "Sydney", 'temperature': "23°C", 'citytime': "08:52", 'weather': "sun.png" },
  { 'id': 5, 'cityname': "Londres", 'temperature': "-7°C", 'citytime': "21:53", 'weather': "sun.png" },
  { 'id': 6, 'cityname': "Georgia", 'temperature': "-2°C", 'citytime': "16:53", 'weather': "sun.png" }];

(() => {
  ReactDOM.render(
    <CityList cities={ cities } />,
    document.getElementById('container')
  );
})();