'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestPage from './components/test';
import CityList from './components/CityList';

// let cities = [{ 'id': 1, 'cityname': "Santiago", 'temperature': "31°C", 'citytime': "18:52", 'weather': "sun.png" },
//   { 'id': 2, 'cityname': "Zurich", 'temperature': "-15°C", 'citytime': "22:52", 'weather': "sun.png" },
//   { 'id': 3, 'cityname': "Auckland", 'temperature': "16°C", 'citytime': "10:52", 'weather': "sun.png" },
//   { 'id': 4, 'cityname': "Sydney", 'temperature': "23°C", 'citytime': "08:52", 'weather': "sun.png" },
//   { 'id': 5, 'cityname': "Londres", 'temperature': "-7°C", 'citytime': "21:53", 'weather': "sun.png" },
//   { 'id': 6, 'cityname': "Georgia", 'temperature': "-2°C", 'citytime': "16:53", 'weather': "sun.png" }];

let cities = [
	{'id':1,'country':'CL','lat':'-33.452560','lon':'-70.689620','name':'Santiago'},
	{'id':2,'country':'CH','lat':'47.376831','lon':'8.541768','name':'Zurich'},
	{'id':3,'country':'NZ','lat':'-36.861419','lon':'174.761153','name':'Auckland'},
	{'id':4,'country':'AU','lat':'-33.867923','lon':'151.208983','name':'Sydney'},
	{'id':5,'country':'UK','lat':'51.527452','lon':'-0.131845','name':'Londres'},
	{'id':6,'country':'USA','lat':'33.770193','lon':'-84.324884','name':'Georgia'}];

(() => {
  ReactDOM.render(
    <CityList cities={ cities } />,
    document.getElementById('container')
  );
})();